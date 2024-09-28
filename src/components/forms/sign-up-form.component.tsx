import { ChangeEvent, useState } from "react";
import Input from "../input/input.component";
import styles from "./sign-up-form.module.scss";

const defaultFormFields = {
  email: "",
  password: "",
  passwordRepeat: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, passwordRepeat } = formFields;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <form className={styles.form}>
      <Input
        label="E-mail"
        type="email"
        onChange={handleChange}
        value={email}
        required
      />
      <Input
        label="Password"
        type="password"
        onChange={handleChange}
        value={password}
        required
      />
      <Input
        label="Repeat password"
        type="password"
        onChange={handleChange}
        value={passwordRepeat}
        required
      />
    </form>
  );
};

export default SignUpForm;
