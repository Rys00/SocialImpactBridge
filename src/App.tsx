import { Route, Routes } from "react-router-dom";
import "./App.css";
import NgoForm from "./components/forms/ngo-form.component";
import SignUpForm from "./components/forms/sign-up-form.component";
import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/home_page/home-page.component";
import NgoPage from "./pages/ngo_page/ngo-page.component";
import RegistrationPage from "./pages/registration";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
            <Route path="/ngo-info" element={<NgoInfoPage /> }/>
            <Route path="/volunteer-info" element={<VolunteerInfoPage />} />
            <Route path="/company-info" element={<CompanyInfoPage />}/>
          <Route path="ngo" element={<NgoPage />} />
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