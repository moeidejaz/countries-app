import React, { useContext } from "react";
import { Context } from "../App";
import styles from "./css/search.module.css";

const SearchBar = () => {
  const { handleChange, input } = useContext(Context);

  function handleFocus(e) {
    e.target.style.boxShadow = "0px 2px 9px rgba(0, 0, 0, 0.532439)";
  }

  function handleBlur(e) {
    e.target.style.boxShadow = "";
  }

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="text"
          name="input"
          className={styles.searchInput}
          placeholder="Search for a country..."
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={input}
          onChange={handleChange}
        />
        <img
          className={styles.icon}
          // src="/src/assets/searchIcon.svg"
          // alt="search icon"
        />
      </div>
    </>
  );
};

export default SearchBar;
