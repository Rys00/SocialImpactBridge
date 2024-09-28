import Button from "../button/button.component.tsx";
import styles from "./navbar.module.scss"

function Navbar() {

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.logo}>
                a
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.navbarButton}>Dla NGO</div>
                <div className={styles.navbarButton}>Dla Wolontariuszy</div>
                <div className={styles.navbarButton}>Dla Firm</div>
            </div>
            <div className={styles.loginContainer}>
                <div className={styles.loginButton}>
                    <Button highlighted={true}>Zaloguj Się</Button>
                </div>
                <div className={styles.userInfo}></div>
            </div>
        </div>
    );
}

export default Navbar;