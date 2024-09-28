import { Route, Routes } from "react-router-dom";
import "./App.css";
import NgoForm from "./components/forms/ngo-form.component";
import SignUpForm from "./components/forms/sign-up-form.component";
import RegistrationPage from "./pages/registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />}>
        <Route index element={<SignUpForm />} />
      </Route>
      <Route path="ngo-form" element={<NgoForm />} />
    </Routes>
  );
}

export default App;
