import { ChangeEvent, useState } from "react";
import "./App.css";
import Input from "./components/input/input.component";

const defaultFormFields = {
  test: "",
};

function App() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { test } = formFields;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <Input label="test" name="test" value={test} onChange={handleChange} />
    </div>
  );
}

export default App;
