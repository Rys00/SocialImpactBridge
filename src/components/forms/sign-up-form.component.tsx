import { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectSignUpData } from "../../store/register-form/register-form.selector";
import { setSignUpData } from "../../store/register-form/register-form.slice";
import Button from "../button/button.component";
import Input from "../inputs/input.component";
import SelectBox from "../inputs/select-box.component";
import styles from "./forms.module.scss";

const SignUpForm = () => {
  const formFields = useAppSelector(selectSignUpData);
  const { email, password, passwordRepeat, organizationType } = formFields;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    dispatch(setSignUpData({ ...formFields, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (organizationType) {
      case "ngo":
        navigate("ngo-form");
        break;
      case "business":
        navigate("business-form");
        break;
      case "volunteer":
        navigate("volunteer-form");
        break;
      case "sponsor":
        navigate("sponsor-form");
        break;
      default:
        break;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Zarejestruj się</h1>
      <Input
        label="Adres e-mail"
        name="email"
        type="email"
        onChange={handleChange}
        value={email}
        required
      />
      <Input
        label="Hasło"
        name="password"
        type="password"
        onChange={handleChange}
        value={password}
        required
      />
      <Input
        label="Powtórz hasło"
        name="passwordRepeat"
        type="password"
        onChange={handleChange}
        value={passwordRepeat}
        required
      />
      <SelectBox
        label="Typ organizacji"
        name="organizationType"
        options={[
          { name: "NGO", value: "ngo" },
          { name: "Firma", value: "business" },
          { name: "Wolontariusz", value: "volunteer" },
          { name: "Sponsor", value: "sponsor" },
        ]}
        onChange={handleChange}
        value={organizationType}
        required
      />
      <Button type="submit" highlighted>
        Dalej
      </Button>
    </form>
  );
};

export default SignUpForm;
