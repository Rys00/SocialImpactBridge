// src/components/pages/ngo-page.component.tsx
import styles from "./ngo-page.module.scss";

function NgoPage() {
    return (
        <div className={`${styles.backgroundContainer}`}>

            <div className={styles.mainTitle}>
                "BARTEL" - FUNDACJA IM. PROFESORA KAZIMIERZA BARTLA
            </div>
            <span className="material-symbols-outlined" style={{fontSize: '36px', fontWeight: '500'}}>
forum
</span>
            <div className={styles.title}>
                OPIS DZIAŁALNOŚCI
            </div>
            <div className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo dignissim odio in faucibus. Donec
                a metus gravida, sodales enim eget, ornare lectus. Nam tincidunt lorem sed mi accumsan, eu cursus dui
                lobortis. Donec dapibus eu odio vitae mattis. Etiam ultricies porta convallis. Donec nec risus at nulla
                imperdiet dapibus non ut est. Duis ornare vitae sem ac sodales. Integer ultrices commodo lectus et
                lobortis.
            </div>
            <div style={{marginTop: '16px'}}>
                #Schroniska #Tagi #ITD
            </div>
            <hr className={styles.rounded} style={{marginTop: '8px'}}/>
            <span className="material-symbols-outlined" style={{fontSize: '36px', fontWeight: '500'}}>
location_on
</span>

            <div className={styles.title}>
                LOCATION
            </div>


            <div className={styles.title} style={{marginBottom: '8px'}}>
                POLAND, MASOVIAN, MASOVIAN, WARSAW
            </div>

            <div className={styles.subtitle}>
                00-100 WARSAW, PUŁAWSKA 1
            </div>

            <hr className={styles.rounded} style={{marginTop: '8px'}}/>
            <span className="material-symbols-outlined" style={{fontSize: '36px', fontWeight: '500'}}>
contact_page
</span>

            <div className={styles.title}>
                CONTACT INFO
            </div>

            <div className={styles.rowWithSpaceAround}>
                <button className={styles.copyButton}>
                    <div className={styles.rowCentered}>
                        <div className={styles.title}>
                            Phone Number
                        </div>
                        <span className="material-symbols-outlined">
content_copy
</span></div>

                    <div className={styles.subtitle}>
                        +48 123 321 195
                    </div>
                </button>

                <button className={styles.copyButton}>
                    <div className={styles.rowCentered}>
                        <div className={styles.title}>
                            Page
                        </div>
                        <span className="material-symbols-outlined">
content_copy
</span></div>
                    <div className={styles.subtitle}>
                        www.example.page.com
                    </div>
                </button>
                <button className={styles.copyButton}>
                    <div className={styles.rowCentered}>
                        <div className={styles.title}>
                            E-mail
                        </div>
                        <span className="material-symbols-outlined">
content_copy
</span></div>
                    <div className={styles.subtitle}>
                        example.mail@mail.com
                    </div>
                </button>
            </div>
            <hr className={styles.rounded}/>
            <div className={styles.rowWithSpaceAround}>


                <button className={styles.copyButton}>
                    <div className={styles.rowCentered}>
                        <div className={styles.title}>
                            KRS
                        </div>
                        <span className="material-symbols-outlined">
content_copy
</span>
                    </div>
                    <div className={styles.description}>
                        0000017687
                    </div>
                </button>
                <button className={styles.copyButton}>
                    <div className={styles.rowCentered}>
                        <div className={styles.title}>
                            NIP
                        </div>
                        <span className="material-symbols-outlined">
content_copy
</span></div>
                    <div className={styles.description}>
                        022-41-11-111
                    </div>
                </button>
                <button className={styles.copyButton}>
                    <div className={styles.rowCentered}>
                        <div className={styles.title}>
                            REGON
                        </div>
                        <span className="material-symbols-outlined">
content_copy
</span>
                    </div>
                    <div className={styles.description}>
                        38 0186266
                    </div>
                </button>
            </div>
        </div>
    );
}

export default NgoPage;
