import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectNgoData } from "../../store/register-form/register-form.selector";
import { setNgoData } from "../../store/register-form/register-form.slice";
import Button from "../button/button.component";
import Input from "../inputs/input.component";
import TextArea from "../inputs/textarea.component";
import styles from "./forms.module.scss";

const NgoForm = () => {
  const formFields = useAppSelector(selectNgoData);
  const {
    krs,
    nazwa,
    nip,
    regon,
    kraj,
    wojewodztwo,
    powiat,
    gmina,
    miejscowosc,
    adres,
    mail,
    adresStrony,
    data,
    celDzialania,
    // przedmiotyDzialalnosci,
  } = formFields;

  const [fetchEnabled, setFetchEnabled] = useState(false);
  const [dataVisible, setDataVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (krs.length === 10) setFetchEnabled(true);
    else setFetchEnabled(false);
  }, [krs]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name == "krs" && !value.match(/^\d{0,10}$/)) return;
    dispatch(setNgoData({ ...formFields, [name]: value }));
  };

  const fetchData = async () => {
    const res = await fetch(
      `https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${krs}?rejestr=S&format=json`
    );
    if (res.status === 404) {
      setErrorMessage("Nie znaleziono organizacji z podanym numerem KRS!");
      setDataVisible(true);
      return;
    }
    if (!res.ok) {
      setErrorMessage("Wystąpił błąd");
      setDataVisible(true);
      return;
    }
    setErrorMessage("");
    const data = (await res.json()).odpis;
    console.log(data);

    const nag = data.naglowekA;
    const d1 = data.dane.dzial1;
    const d3 = data.dane.dzial3;

    const pkds: {
      nieodplatnyPkd: { kodKlasa: string }[];
      odplatnyPkd: { kodKlasa: string }[];
    } = d3.przedmiotDzialalnosciOPP;

    for (const category of Object.values(pkds)) {
      for (const pkd of category) {
        const res2 = await fetch(
          `http://34.116.230.160:8080/api/pkdCodes/getByClassCode`,
          {
            headers: { contentType: "application/json" },
            method: "POST",
            body: JSON.stringify({
              codeClass: pkd.kodKlasa,
            }),
          }
        );
        console.log(await res2.json());
        console.log("hello world");
      }
    }

    dispatch(
      setNgoData({
        ...formFields,
        nazwa: d1.danePodmiotu.nazwa,
        nip: d1.danePodmiotu.identyfikatory.nip,
        regon: d1.danePodmiotu.identyfikatory.regon,
        kraj: d1.siedzibaIAdres.siedziba.kraj,
        wojewodztwo: d1.siedzibaIAdres.siedziba.wojewodztwo,
        powiat: d1.siedzibaIAdres.siedziba.powiat,
        gmina: d1.siedzibaIAdres.siedziba.gmina,
        miejscowosc: d1.siedzibaIAdres.siedziba.miejscowosc,
        adres: `${d1.siedzibaIAdres.adres.ulica} ${d1.siedzibaIAdres.adres.nrDomu} ${d1.siedzibaIAdres.adres.kodPocztowy}`,
        mail: d1.siedzibaIAdres.adresPocztyElektronicznej || "",
        adresStrony: d1.siedzibaIAdres.adresStronyInternetowej || "",
        data: nag.dataRejestracjiWKRS,
        celDzialania: d3.celDzialaniaOrganizacji.celDzialania,
      })
    );
    console.log(data);
  };

  return (
    <form
      className={styles.form}
      onSubmit={() => {
        navigate("#");
      }}
    >
      <h1>Dane organizacji</h1>
      <div className={styles.horizontal}>
        <Input
          label="Numer KRS"
          name="krs"
          type="text"
          onChange={handleChange}
          value={krs}
          required
        />
        <Button
          type="button"
          onClick={fetchData}
          highlighted
          disabled={!fetchEnabled}
        >
          Pobierz
        </Button>
      </div>
      <div className={`${styles.data} ${dataVisible ? "" : styles.hidden}`}>
        {errorMessage ? (
          <span className={styles.error}>{errorMessage}</span>
        ) : (
          <>
            <TextArea label="Nazwa" value={nazwa} disabled />
            <div className={styles.horizontal}>
              <Input label="NIP" value={nip} disabled />
              <Input label="REGON" value={regon} disabled />
            </div>
            <div className={styles.horizontal}>
              <Input label="Data założenia" value={data} disabled />
              <Input label="Kraj" value={kraj} disabled />
            </div>
            <div className={styles.horizontal}>
              <Input label="Województwo" value={wojewodztwo} disabled />
              <Input label="Powiat" value={powiat} disabled />
            </div>
            <div className={styles.horizontal}>
              <Input label="Gmina" value={gmina} disabled />
              <Input label="Miejscowość" value={miejscowosc} disabled />
            </div>
            <TextArea label="Adres" value={adres} disabled />
            <Input
              name="mail"
              type="email"
              label="Adres e-mail"
              value={mail}
              onChange={handleChange}
              required
            />
            <Input label="Adres strony" value={adresStrony} disabled />
            <TextArea
              name="celDzialania"
              label="Cel działania"
              value={celDzialania}
              onChange={handleChange}
              required
            />
            <div className={styles.tags}></div>
          </>
        )}
      </div>
    </form>
  );
};

export default NgoForm;
