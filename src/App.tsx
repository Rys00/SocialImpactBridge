import { Route, Routes } from "react-router-dom";
import "./App.css";
import BusinessForm from "./components/forms/business-form.component copy";
import NgoForm from "./components/forms/ngo-form.component";
import SignUpForm from "./components/forms/sign-up-form.component";
import VolunteerForm from "./components/forms/volunteer-form.component";
import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/home_page/home-page.component";
import NgoPage from "./pages/ngo_page/ngo-page.component";
import RegistrationPage from "./pages/registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="ngo" element={<NgoPage />} />
        <Route path="registration" element={<RegistrationPage />}>
          <Route index element={<SignUpForm />} />
          <Route path="ngo-form" element={<NgoForm />} />
          <Route path="business-form" element={<BusinessForm />} />
          <Route path="volunteer-form" element={<VolunteerForm />} />
          <Route path="sponsor-form" element={<NgoForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
