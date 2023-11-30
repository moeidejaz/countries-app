import React, { useContext, useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import SearchFilter from "./Filter.jsx";
import styles from "./css/main.module.css";
import CountryCard from "./CountryCard.jsx";

const Main = () => {
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
  }, []); // Empty dependency array means this effect runs once after the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main>
      <section className={styles.main_header}>
        <SearchBar />
        <SearchFilter />
      </section>

      <section className={styles.countries}>
        {data.map((item , index) => {
          return <CountryCard
          key={index}
            name={item.name.official}
            population={item.population}
            region={item.region}
            capital={item.capital}
            img={item.flags.svg}
          />;
        })}
      </section>
    </main>
  );
};

export default Main;
