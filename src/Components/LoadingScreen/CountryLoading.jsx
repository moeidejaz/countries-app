import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "./LoadingScreen/CardsLoading";
import styles from "./css/country.module.css";

const CountryLoading = () => {
 
  return (
    <section className={styles.country}>
      <div className={styles.backBtn} onClick={handleGoBack}>
        <img className={styles.leftArrow} />
        <p>Back</p>
      </div>
      <section className={styles.flex}>
        <img
          src={data.flags.png}
          alt="Country Flag"
          className={styles.flagImg}
        />

        <section className={styles.grid}>
          {/* Row 1: Country Name */}
          <h1 className={styles.countryName}>{data.name.common}</h1>

          {/* Row 2: Left and Right Details */}
          <section className={styles.countryinfo}>
            <section className={styles.infoLeft}>
              <p>
                <strong>Native Name:</strong> {data.name.common}
              </p>
              <p>
                <strong>Population:</strong> {data.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {data.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {data.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {data.capital}
              </p>
            </section>
            <section className={styles.infoRight}>
              <p>
                <strong>Top Level Domain:</strong> {data.tld}
              </p>
              <p>
                <strong>Currencies:</strong>
                {/* {Object.entries(data.currencies).forEach(([key, value]) => {
                  Object.entries(value).forEach(([key , value])=>{
                    return value
                  })
                })} */}
                {Object.values(data.currencies)
                  .map((currency) => ` ${currency.name} ${currency.symbol}`)
                  .join(", ")}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {Object.values(data.languages)
                  .map((currency) => ` ${currency}`)
                  .join(", ")}
              </p>
            </section>
          </section>

          {/* Row 3: Border Countries */}

          <ul className={styles.border}>
            <div>
              <p>
                <strong>Border Countries:</strong>
              </p>
            </div>
            <div className={styles.borderList}>
              {data.borders ? (
                data.borders.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })
              ) : (
                <li>No Borders</li>
              )}
            </div>
          </ul>
        </section>
      </section>
    </section>
  )
};

export default Country;
