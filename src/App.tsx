import { Route, Routes } from "react-router-dom";
import "./App.css";
import NgoForm from "./components/forms/ngo-form.component";
import SignUpForm from "./components/forms/sign-up-form.component";
import Navbar from "./components/navbar/navbar.component";
import RegistrationPage from "./pages/registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="registration" element={<RegistrationPage />}>
          <Route index element={<SignUpForm />} />
          <Route path="ngo-form" element={<NgoForm />} />
          <Route path="business-form" element={<NgoForm />} />
          <Route path="volunteer-form" element={<NgoForm />} />
          <Route path="sponsor-form" element={<NgoForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
