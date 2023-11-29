import React, { useContext } from "react";
import SearchBar from "./SearchBar.jsx";
import SearchFilter from "./Filter.jsx";
import styles from "./css/main.module.css";
import CountryBox from "./CountryBox.jsx";

const Main = () => {
  return (
    <main>
      <section className={styles.main_header}>
        <SearchBar />
        <SearchFilter />
      </section>

      <section className={styles.countries}>
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
   
      </section>

    </main>
  );
};

export default Main;
