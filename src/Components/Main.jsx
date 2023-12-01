import React, { useContext, useState, useEffect } from "react";
import { Context } from "../App.jsx";
import SearchBar from "./SearchBar.jsx";
import SearchFilter from "./Filter.jsx";
import styles from "./css/main.module.css";
import CountryCard from "./CountryCard.jsx";

const Main = () => {
  const { input } = useContext(Context);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = () => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <p className={styles.loading}>Loading...</p>
      </main>
    );
  }

  if (error) {
    console.log(window.innerHeight);
    return (
      <main>
        <p className={styles.error}>Error: {"No countries found."}</p>
      </main>
    );
  }

  const filteredData = data.filter(
    (item) =>
      item.name.official.toLowerCase().includes(input.toLowerCase()) ||
      item.name.common.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <main>
      <section className={styles.main_header}>
        <SearchBar />
        <SearchFilter />
      </section>

      <section className={styles.countries}>
        {input
          ? filteredData.map((item, index) => {
              return (
                <CountryCard
                  key={index}
                  name={item.name.official}
                  population={item.population.toLocaleString()}
                  region={item.region}
                  capital={item.capital}
                  img={item.flags.png}
                />
              );
            })
          : data.map((item, index) => {
              return (
                <CountryCard
                  key={index}
                  name={item.name.official}
                  population={item.population.toLocaleString()}
                  region={item.region}
                  capital={item.capital}
                  img={item.flags.png}
                />
              );
            })}
      </section>
    </main>
  );
};

export default Main;
