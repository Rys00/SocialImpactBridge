import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Button from "../button/button.component.tsx";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>

        <Link to="/" className={styles.logoContainer}>
          <img src={Logo} className={styles.logo} />
          <p>ImpactLink</p>
        </Link>
        <div className={styles.buttonContainer}>
          <NavLink
            to="/ngo-info"
            className={({ isActive }) =>
              `${styles.navbarButton} ${isActive ? "active" : ""}`
            }
          >
            Dla NGO
          </NavLink >
          <NavLink
              to="/volunteer-info"
              className={({ isActive }) =>
                  `${styles.navbarButton} ${isActive ? "active" : ""}`
              }
          >
            Dla Wolontariuszy
          </NavLink >
          <NavLink
              to="/company-info"
              className={({ isActive }) =>
                  `${styles.navbarButton} ${isActive ? "active" : ""}`
              }
          >
            Dla Firm
          </NavLink >
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.loginButton}>
            <Link to="registration">
              <Button highlighted>Zaloguj Się</Button>
            </Link>
          </div>
          <div className={styles.userInfo}></div>
        </div>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
