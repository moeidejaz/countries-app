import React from "react";
import styles from "./css/cards.module.css";

const Card = ({name , population , region , capital , imgURL}) => {
  return (
    <div className={styles.country}>
      <img src={imgURL} alt={`${name} flag`} />
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

export default Card;
