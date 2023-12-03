import { useState, createContext } from "react";
import Main from "./Components/Main";
import "./App.css";

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
        <Main />
      </Context.Provider>
    </>
  );
}

export default App;
