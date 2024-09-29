
import styles from "./home-page.module.scss"

function HomePageComponent() {
    return (
        <div style={{width:'100%'}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>Search For NGOs</div>
                <button>
                     <span className="material-symbols-outlined">
search
</span>
                </button>

            </div>
            <div style={{display: "flex", justifyContent: "start"   }}>

                <div>
                Organization Type:
                </div>
                <div className={styles.selectedCard} style={{marginLeft: "16px"}}>
                    NGOs
            </div> <div className={styles.usselectedCard} style={{marginLeft: "8px"}}>Companies</div><div className={styles.usselectedCard} style={{marginLeft: "8px"}}>Volunteers</div>
            </div> <div style={{display: "flex", justifyContent: "start"}}>
            <div >
                Filters:
            </div> <div style={{marginLeft: "16px"}}>
            Tags
        </div> <div style={{marginLeft: "8px"}}>
            Country
        </div> <div style={{marginLeft: "8px"}}>
            Voivodship
        </div><div style={{marginLeft: "8px"}}>
            Commune
        </div>
        </div>
            <ol>
                <li className={styles.listTile}>
                    <div style={{justifyContent: "start", fontWeight: 'bolder', fontSize: "19px"}}>
                        "BARTEL" - FUNDACJA IM. PROFESORA KAZIMIERZA BARTLA
                    </div>
       <button style={{display: 'flex'}}>             <div style={{justifyContent: "start", display: "flex", fontSize: "16px"}}>
                        KRS: 0000017687
                    </div>
                    <span className="material-symbols-outlined">
content_copy
</span></button>
                    <div style={{display: "flex", justifyContent: "space-between", fontSize: "16px"}}>
                        <button style={{display: "flex"}}><div>
                            E-mail: bartel@mail.com
                        </div>
                        <span className="material-symbols-outlined">
content_copy
                        </span></button>
                        <div style={{fontSize: "16px"}}>#Schroniska#Pomoc#TAGI</div>
                    </div>
                </li>
            </ol>
        </div>

    );
}

export default HomePageComponent;