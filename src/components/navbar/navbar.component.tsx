import { Link, Outlet } from "react-router-dom";
import Button from "../button/button.component.tsx";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logo}>
          ImpactLink
        </Link>
        <div className={styles.buttonContainer}>
          <div className={styles.navbarButton}>Dla NGO</div>
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
