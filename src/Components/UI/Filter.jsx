import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../../App";
import styles from "../css/filter.module.css";

const Filter = () => {
  const filterBox = useRef();
  const options = useRef();
  const arrow = useRef();
  const { handleOptions, selectedFilter } = useContext(Context);

  function handleClick() {
    const display = window.getComputedStyle(options.current).getPropertyValue("display");
//managing the UI of filter box
    if (display === "none") {
      options.current.style.display = "flex";
      arrow.current.style.transform = "rotate(180deg)";
      filterBox.current.style.boxShadow =
        "0px 2px 9px rgba(0, 0, 0, 0.5324398)";
    } else if (display === "flex") {
      options.current.style.display = "none";
      arrow.current.style.transform = "";
      filterBox.current.style.boxShadow = "";
    }
  }

  useEffect(() => {
    const clickHandler = () => {};

    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div
      className={styles.filterContainer}
      ref={filterBox}
      onClick={handleClick}
    >
      <div className={styles.filter}>
        <p>{selectedFilter}</p>
        <i className="fa-solid fa-chevron-down" ref={arrow}></i>
      </div>

      <div className={styles.options} ref={options}>
        <ul>
          <li name="Africa" data-value="Africa" onClick={handleOptions}>
            Africa
          </li>
          <li name="Americas" data-value="Americas" onClick={handleOptions}>
            America
          </li>
          <li name="Asia" data-value="Asia" onClick={handleOptions}>
            Asia
          </li>
          <li name="Europe" data-value="Europe" onClick={handleOptions}>
            Europe
          </li>
          <li name="Oceania" data-value="Oceania" onClick={handleOptions}>
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
