import React, { useState, useRef, useEffect } from "react";
import styles from "./css/filter.module.css";

const Filter = () => {
  const filterBox = useRef();
  const options = useRef();
  const arrow = useRef();

  function handleClick() {
    const display = window.getComputedStyle(options.current).getPropertyValue("display");

    if (display === "none") {
      options.current.style.display = "flex";
      arrow.current.style.transform = "rotate(180deg)";
      filterBox.current.style.boxShadow = '0px 2px 9px rgba(0, 0, 0, 0.5324398)';
    } else if (display === "flex") {
      options.current.style.display = "none";
      arrow.current.style.transform = "";
      filterBox.current.style.boxShadow = '';
    }
  }

  useEffect(() => {
    const clickHandler = ()=> {
      
    }

    document.addEventListener("click" , clickHandler) 
    return () => {
      document.removeEventListener("click" , clickHandler)
    }
  }, [])
  

  function handleOption(e){
console.log(e.target.getAttribute('data-value'));
  }

  return (
    <div className={styles.filterContainer} ref={filterBox} onClick={handleClick}>
      <div className={styles.filter}>
        <p>Filter by Region</p>
        <i className="fa-solid fa-chevron-down" ref={arrow}></i>
      </div>

      <div className={styles.options} ref={options}>
        <ul>
          <li name="africa" data-value="africa" onClick={handleOption}>Africa</li>
          <li name="america" data-value="america">America</li>
          <li name="asia" data-value="asia">Asia</li>
          <li name="europe" data-value="europe">Europe</li>
          <li name="oceania" data-value="oceania">Oceania</li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
