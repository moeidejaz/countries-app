import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styles from "../css/cards.module.css";

const Card = ({ name, population, region, capital, imgURL, cca3 }) => {
  const navigate = useNavigate()

  function handleClick(e) {
    const name = e.target.closest("section").getAttribute("data-name")
    navigate(`/${name}`, {state: name});
  }
  return (
    <section className={styles.country} data-name={cca3} onClick={handleClick}>
      <img src={imgURL} alt={`${name} flag`} />
      <ul className={styles.details}>
        <li>
          <h3>{name}</h3>
        </li>
        <li>
          <span>Population:</span> {population}
        </li>
        <li>
          <span>Region:</span> {region}
        </li>
        <li>
          <span>Capital:</span> {capital}
        </li>
      </ul>
    </section>
  );
  4;
};

export default Card;
