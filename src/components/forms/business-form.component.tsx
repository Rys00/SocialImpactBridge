import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectBusinessData } from "../../store/register-form/register-form.selector";
import { setBusinessData } from "../../store/register-form/register-form.slice";
import Button from "../button/button.component";
import Input from "../inputs/input.component";
import TextArea from "../inputs/textarea.component";
import styles from "./forms.module.scss";

const BusinessForm = () => {
  const formFields = useAppSelector(selectBusinessData);
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
  } = formFields;

  const [fetchEnabled, setFetchEnabled] = useState(false);
  const [dataVisible, setDataVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (krs.length === 10) {
      setFetchEnabled(true);
      fetchData();
    } else setFetchEnabled(false);
  }, [krs]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name == "krs" && !value.match(/^\d{0,10}$/)) return;
    dispatch(setBusinessData({ ...formFields, [name]: value }));
  };

  const fetchData = async () => {
    setFetchEnabled(false);
    const res = await fetch(
      `https://api-krs.ms.gov.pl/api/krs/OdpisAktualny/${krs}?rejestr=P&format=json`
    );
    if (res.status === 404) {
      setErrorMessage("Nie znaleziono firmy z podanym numerem KRS!");
      setFetchEnabled(true);
      setDataVisible(true);
      return;
    }
    if (!res.ok) {
      setErrorMessage("Wystąpił błąd");
      setFetchEnabled(true);
      setDataVisible(true);
      return;
    }
    setErrorMessage("");
    const data = (await res.json()).odpis;
    const nag = data.naglowekA;
    const d1 = data.dane.dzial1;
    dispatch(
      setBusinessData({
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
      })
    );
    setFetchEnabled(true);
    setDataVisible(true);
  };

  return (
    <form
      className={styles.form}
      onSubmit={() => {
        navigate("#");
      }}
    >
      <h1>Dane firmy</h1>
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
      <div className={dataVisible ? styles.data : styles.hidden}>
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
          </>
        )}
      </div>
    </form>
  );
};

export default BusinessForm;
