import { Route, Routes } from "react-router-dom";
import "./App.css";
import NgoForm from "./components/forms/ngo-form.component";
import SignUpForm from "./components/forms/sign-up-form.component";
import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/home_page/home-page.component";
import NgoPage from "./pages/ngo_page/ngo-page.component";
import RegistrationPage from "./pages/registration";
import NgoInfoPage from "./pages/info_pages/ngo_info_page/ngo-info-page.tsx";
import VolunteerInfoPage from "./pages/info_pages/volunteer_info_page/volunteer-info-page.tsx";
import CompanyInfoPage from "./pages/info_pages/company_info_page/company-info-page.tsx";

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