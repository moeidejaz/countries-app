import React, { useContext } from "react";
import SearchBar from "./SearchBar.jsx";
import SearchFilter from "./Filter.jsx";
import styles from './css/main.module.css'

const Main = () => {
  return (
    <main>

      <section className={styles.main_header}>
        <SearchBar/>
        <SearchFilter />
      </section>

    </main>
  );
};

export default Main;
