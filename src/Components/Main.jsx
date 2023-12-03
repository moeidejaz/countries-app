import React, { useContext, useState, useEffect } from "react";
import { Context } from "../App.jsx";
import SearchBar from "./SearchBar.jsx";
import SearchFilter from "./Filter.jsx";
import Card from "./Card.jsx";
import Country from "./Country.jsx";
import CardsLoading from "./LoadingScreen/CardsLoading.jsx";
import styles from "./css/main.module.css";

const Main = () => {
  const { input, selectedOption } = useContext(Context);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <CardsLoading />
      </main>
    );
  }

  if (error) {
    return (
      <main>
        {/* <p className={styles.error}>Error: {"No countries found."}</p> */}
        <CardsLoading />
      </main>
    );
  }

  const searchData = data.filter(
    (item) =>
      item.name.official.toLowerCase().includes(input.toLowerCase()) ||
      item.name.common.toLowerCase().includes(input.toLowerCase())
  );

  const regionData = data.filter((item) => item.region === selectedOption);

  return (
    <main>
      <section className={styles.main_header}>
        <SearchBar />
        <SearchFilter />
      </section>

      <section className={styles.countries}>
        {input
          ? searchData.map((item, index) => {
              return (
                <Card
                  key={index}
                  name={item.name.official}
                  cca3={item.cca3.toLowerCase()}
                  population={item.population.toLocaleString()}
                  region={item.region}
                  capital={item.capital}
                  imgURL={item.flags.png}
                />
              );
            })
          : selectedOption
          ? regionData.map((item, index) => {
              return (
                <Card
                  key={index}
                  name={item.name.official}
                  cca3={item.cca3.toLowerCase()}
                  population={item.population.toLocaleString()}
                  region={item.region}
                  capital={item.capital}
                  imgURL={item.flags.png}
                />
              );
            })
          : data.map((item, index) => {
              return (
                <Card
                  key={index}
                  name={item.name.official}
                  cca3={item.cca3.toLowerCase()}
                  population={item.population.toLocaleString()}
                  region={item.region}
                  capital={item.capital}
                  imgURL={item.flags.png}
                />
              );
            })}
      </section>
    </main>
  );
};

export default Main;
