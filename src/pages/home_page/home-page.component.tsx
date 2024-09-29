import SelectBox from "../../components/inputs/select-box.component.tsx";
import NgoTileComponent from "../../components/ngo-listing/ngo-tile.component.tsx";
import SearchBar from "./components/searchbar.component.tsx";
import styles from "./home-page.module.scss";
// import SearchBar from "./components/searchbar.component.tsx";

const HomePage = () => {
  return (
    <div style={{ width: "70%", height: "70px" }}>
      <div className={styles.row}>
        <SearchBar />
        <button
          className={`${styles.searchButton} material-symbols-outlined`}
          style={{
            marginLeft: "24px",
          }}
        >
          search
        </button>
      </div>
      <div className={styles.row} style={{ marginTop: "8px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          Organization Type:
        </div>
        <button className={styles.selectedCard} style={{ marginLeft: "18px" }}>
          NGOs
        </button>
        <button
          className={styles.unselectedCard}
          style={{ marginLeft: "12px" }}
        >
          Firmy
        </button>
        <button
          className={styles.unselectedCard}
          style={{ marginLeft: "12px" }}
        >
          Wolontariusze & Pracownicy
        </button>
      </div>
      <div
        className={styles.row}
        style={{ marginTop: "16px", content: "flex", justifyContent: "start" }}
      >
        <div
          style={{
            content: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          Filters:
        </div>
        <SelectBox
          label={"Tagi"}
          options={[{ name: "123", value: "" }]}
          style={{
            borderWidth: "2px",
            borderColor: "var(--text)",
            width: "144px",
          }}
        />
        <SelectBox
          label={"Państwo"}
          options={[{ name: "123", value: "" }]}
          style={{
            borderWidth: "2px",
            borderColor: "var(--text)",
            width: "144px",
          }}
        />
        <SelectBox
          label={"Województwo"}
          options={[{ name: "123", value: "" }]}
          style={{
            borderWidth: "2px",
            borderColor: "var(--text)",
            width: "144px",
          }}
        />
        <SelectBox
          label={"Powiat"}
          options={[{ name: "123", value: "" }]}
          style={{
            borderWidth: "2px",
            borderColor: "var(--text)",
            width: "144px",
          }}
        />
      </div>
      <div className={`${styles.listTile}  `} style={{ marginTop: "32px" }}>
        <NgoTileComponent
          name={'BYDGOSKIE TOWARZYSTWO ŻUŻLOWE "POLONIA"'}
          description="1. ROZWIJANIE I PROPAGOWANIE INICJATYW, POSTAW I DZIAŁAŃ SPRZYJAJĄCYCH PRAWIDŁAWEMU FUNKCJONOWANIU CHORYCH NA FENYLOKETONURIĘ.
2. WSZECHSTRONNA WSPÓŁPRACA Z INNYMI ORGANIZACJAMI W KRAJU I ZA GRANICĄ MAJĄCYMI NA CELU DOBRO CHORYCH NA FENYLOKETONURIĘ.
3. KOMPLEKSOWE DZIAŁANIE NA RZECZ CHORYCH NA FENYLOKETONURIĘ.
4. DĄŻENIE DO ZAPEWNIENIA ODPOWIEDNICH, SPECJALISTYCZNYCH ŚRODKÓW DIETETYCZNYCH. 
5. ZAPEWNIENIE ZAINTERESOWANYM DOSTĘPU DO WSZELKICH INFORMACJI MAJĄCYCH ZNACZENIE DLA CHORYCH NA FENYLOKETONURIĘ.
6. PROWADZENIE DZIAŁALNOŚCI CHARYTATYWNEJ."
          location="UL. ANTONIEGO CHOŁONIEWSKIEGO 17-19 85-127 BYDGOSZCZ"
          tags={["tag1", "tag2"]}
        />
      </div>
    </div>
  );
};

export default HomePage;
