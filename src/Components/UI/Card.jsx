import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styles from "../css/cards.module.css";

const Card = ({ name, population, region, capital, imgURL, cca3 }) => {
  // we are getting props from Main.jsx
  const navigate = useNavigate()

  function handleClick(e) {
    // here we're getting the data-name attribute to further redirect to detailed info page
    const name = e.target.closest("section").getAttribute("data-name")
    //passing the name as path and state to Country.jsx component
    navigate(`/${name}`, {state: name});
  }
  return (
    //used cca3 value from API as it is unique for every country and found parameter in API docs
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
