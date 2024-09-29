import styles from './home-page.module.scss';

const HomePage = () => {
  return (
    <div>
      <div>Search For NGOs</div>
      <div className={styles.row}>
        <div>Organization Type:</div>
        <div>NGOs</div> <div>Companies</div>
        <div>Volunteers</div>
      </div>{" "}
      <div className={styles.row}>
        <div>Filters:</div> <div>Tags</div> <div>Country</div>{" "}
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
