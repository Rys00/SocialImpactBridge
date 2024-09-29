import styles from './home-page.module.scss';
import SearchBar from "./components/searchbar.component.tsx";
import SelectBox from "../../components/inputs/select-box.component.tsx";
// import SearchBar from "./components/searchbar.component.tsx";

const HomePage = () => {
  return (
      <div style={{width:'70%', height:"70px"}}>

        <div className={styles.row}>

            <SearchBar />
          <button className={`${styles.searchButton} material-symbols-outlined` } style={{
              marginLeft: '24px'
          }}>
search
</button></div>
          <div className={styles.row} style={{marginTop:"8px"}}>

              <div style={{
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"center"
              }}>Organization Type:</div>
              <button className={styles.selectedCard} style={{marginLeft: '18px'}}>NGOs</button>
              <button className={styles.unselectedCard} style={{marginLeft: '12px'}}>Firmy</button>
              <button className={styles.unselectedCard} style={{marginLeft: '12px'}}>Wolontariusze & Pracownicy</button>
          </div>
          <div className={styles.row} style={{marginTop:"16px", content:"flex", justifyContent:"start"}}>
              <div style={{content:"flex", flexDirection:"column", justifyContent: "center"}}>Filters:</div>
              <SelectBox label={"Tagi"} options={[{ name: "123", value: "" }]} style={{
                  borderWidth:"2px",
                  borderColor:"var(--text)",  width:"144px"

              }}/>
              <SelectBox label={"Państwo"} options={[{ name: "123", value: "" }]} style={{
                  borderWidth:"2px",
                  borderColor:"var(--text)",  width:"144px"
              }}/>
              <SelectBox label={"Województwo"} options={[{ name: "123", value: "" }]} style={{
                  borderWidth:"2px",
                  borderColor:"var(--text)", width:"144px"
              }}/>
              <SelectBox label={"Powiat"} options={[{ name: "123", value: "" }]} style={{
                  borderWidth:"2px",
                  borderColor:"var(--text)", width:"144px"
              }}/>
          </div>
          <div className={`${styles.listTile}  `} style={{marginTop:"32px"}}>
              <div>"BARTEL" - FUNDACJA IM. PROFESORA KAZIMIERZA BARTLA</div>
              <div className={styles.row}>KRS: 0000017687</div>
              <div className={styles.rowSpaceBetween}>
                  <div>E-mail: bartel@mail.com</div>
                  <div>#Schroniska#Pomoc#TAGI</div>
              </div>
          </div>
      </div>
  );
};

export default HomePage;
