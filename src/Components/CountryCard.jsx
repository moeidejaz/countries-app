import React from "react";
import styles from "./css/country.module.css";

const CountryCard = ({name , population , region , capital , img}) => {
  return (
    <div className={styles.country}>
      <img src={img} alt={`${name} flag`} />
      <ul className={styles.details}>
        <li><h3>{name}</h3></li>
        <li><span>Population:</span> {population}</li>
        <li><span>Region:</span> {region}</li>
        <li><span>Capital:</span> {capital}</li>
      </ul>
    </div>
  );
  4;
};

export default CountryCard;
