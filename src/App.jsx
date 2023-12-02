import { useState, createContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

export const Context = createContext();

function App() {
  const [input, setInput] = useState("")
  const [selectedOption, setSelectedOption] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("Filter by Region")

  function handleChange(e){
    setInput(e.target.value)
  }

  
  function handleOptions(e){
    const optionValue = e.target.getAttribute('data-value');
    setSelectedOption(optionValue)
    setSelectedFilter(optionValue)
  }

  const contextValues = {
    handleChange,
    input, 
    handleOptions,
    selectedOption,
    selectedFilter
  }

  // console.log(input);

  return (
    <>
      <Context.Provider value={contextValues}>
        <Header />
        <Main />
        <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;
