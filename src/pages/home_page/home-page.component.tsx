import styles from './home-page.module.scss';
import SearchBar from "./components/searchbar.component.tsx";
// import SearchBar from "./components/searchbar.component.tsx";

const HomePage = () => {
  return (
      <div style={{width:'70%', height:"70px"}}>

        <div className={styles.row}>

            <SearchBar />
          <button className="material-symbols-outlined" style={{
              height:'70px'
              ,width:'70px'
              ,background:'var(--secondary)', outline:'none', border:'none', marginLeft: '24px'
          }}>
search
</button></div>
          <div className={styles.row}>
              <div>Organization Type:</div>
              <div className={styles.selectedCard}>NGOs</div>
              <div>Companies</div>
              <div>Volunteers</div>
          </div>
          {" "}
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
