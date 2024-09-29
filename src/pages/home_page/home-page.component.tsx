import styles from './home-page.module.scss';
import SearchBar from "./components/searchbar.component.tsx";
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
              <div>Organization Type:</div>
              <div className={styles.selectedCard} style={{marginLeft: '18px'}}>NGOs</div>
              <div className={styles.unselectedCard} style={{marginLeft: '12px'}}>Companies</div>
              <div className={styles.unselectedCard} style={{marginLeft: '12px'}}>Volunteers</div>
          </div>
          <div className={styles.row}>
              <div>Filters:</div>
              <div>Tags</div>
              <div>Country</div>
              {" "}
              <div>Voivodship</div>
              <div>Commune</div>
          </div>
          <div className={`${styles.listTile}  `}>
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
