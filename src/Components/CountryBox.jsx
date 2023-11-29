import React from "react";
import styles from "./css/country.module.css";
const CountryBox = () => {
  return (
    <div className={styles.country}>
      <img src="https://flagcdn.com/w320/bf.png" alt="" />
      <ul className={styles.details}>
        <li><h3>Burkina Faso</h3></li>
        <li><span>Population:</span> 20,903,278</li>
        <li><span>Region:</span> Africa</li>
        <li><span>Capital:</span> Ouagadougou</li>
      </ul>
    </div>
  );
  4;
};

export default CountryBox;
