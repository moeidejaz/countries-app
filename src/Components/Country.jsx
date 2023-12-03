import React from "react";
import styles from "./css/country.module.css";

const Country = () => {
  return (
    <section className={styles.country}>
      <div className={styles.backBtn}>
        <img className={styles.leftArrow} />
        <p>Back</p>
      </div>
      <section className={styles.flex}>
        <img
          src="src/assets/pk.png"
          alt="Country Flag"
          className={styles.flagImg}
        />

        <section className={styles.grid}>
          {/* Row 1: Country Name */}
          <h1 className={styles.countryName}>Pakistan</h1>

          {/* Row 2: Left and Right Details */}
          <section className={styles.countryinfo}>
            <section className={styles.infoLeft}>
              <p>Native Name: Pakistan</p>
              <p>Population: 220,892,331</p>
              <p>Region: South Asia</p>
              <p>Sub Region: Southern Asia</p>
              <p>Capital: Islamabad</p>
            </section>
            <section className={styles.infoRight}>
              <p>Top Level Domain: .pk</p>
              <p>Currencies: Pakistani rupee</p>
              <p>Languages: UrduEnglish</p>
            </section>
          </section>

          {/* Row 3: Border Countries */}
          <ul className={styles.border}>
            <div>
              <p>Border Countries:</p>
            </div>
            <div className={styles.borderList}>
              <li>AFG</li>
              <li>CHN</li>
              <li>IN</li>
              <li>IRN</li>
            </div>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Country;
