import React, { useContext, useState, useEffect } from "react";
import SwitchTheme from "../utils/ThemeSwitcher";
import darkMoon from "../../assets/darkMoon.svg";
import lightMoon from "../../assets/lightMoon.svg";

import styles from "../css/header.module.css";

const Header = () => {
  //changing the mode using state
  const [darkMode, setDarkMode] = useState(true);

  function toggleMode() {
    setDarkMode(!darkMode);
  }
  //using swithTheme utility to change mode
  useEffect(() => {
    SwitchTheme(darkMode);
  }, [darkMode]);

  return (
    <header className={styles.header}>
      <h2>Where in the World?</h2>
      <p className={styles.modeChanger} onClick={toggleMode}>
        <img src={darkMode ? darkMoon : lightMoon} alt="moon" />{" "}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </p>
    </header>
  );
};

export default Header;
