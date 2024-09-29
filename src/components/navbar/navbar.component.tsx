import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Button from "../button/button.component.tsx";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} />
          ImpactLink
        </Link>
        <div className={styles.buttonContainer}>
          <NavLink
            to="/ngo"
            className={({ isActive }) =>
              `${styles.navbarButton} ${isActive ? "active" : ""}`
            }
          >
            Dla NGO
          </NavLink>
          <div className={styles.navbarButton}>Dla Wolontariuszy</div>
          <div className={styles.navbarButton}>Dla Firm</div>
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
