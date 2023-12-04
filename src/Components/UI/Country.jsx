import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CountryLoading from "../LoadingScreen/CountryLoading";
import styles from "../css/country.module.css";

const Country = () => {
  const [data, setData] = useState(null);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${state}`
      );
      const results = await response.json();
      setData(results[0]);
    } catch (error) {
      console.log("error", error);
    }
  };

  const docTitle = () => {
    // Check if data is not null before logging
    data
      ? (document.title = data.name.common)
      : (document.title = "Rest Countries App");
  };

  useEffect(() => {
    // Call fetchData from within the useEffect
    fetchData();
  }, []); // Runs only on mount

  useEffect(() => {
    // document.title = "Pakistan"

    docTitle();
    return () => {
      document.title = "Rest Countries App";
    };
  }, [data]);

  // useEffect(() => {
  //   document.title = "Pak"

  //   return () => {
  //     document.title = "Rest Countries App"
  //   };
  // }, []);

  return data ? (
    <main className={styles.country}>
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
              <p>Native Name: {data.name.common}</p>
              <p>Population: {data.population.toLocaleString()}</p>
              <p>Region: {data.region}</p>
              <p>Sub Region: {data.subregion}</p>
              <p>Capital: {data.capital}</p>
            </section>
            <section className={styles.infoRight}>
              <p>Top Level Domain: {data.tld}</p>
              <p>
                Currencies:
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
                Languages:{" "}
                {Object.values(data.languages)
                  .map((currency) => ` ${currency}`)
                  .join(", ")}
              </p>
            </section>
          </section>

          {/* Row 3: Border Countries */}

          <ul className={styles.border}>
            <div>
              <p>Border Countries:</p>
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
    </main>
  ) : (
    <CountryLoading />
  );
};

export default Country;
