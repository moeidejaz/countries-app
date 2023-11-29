import { useState, createContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

export const Context = createContext();

function App() {
  const [input, setInput] = useState("")

  function handleChange(e){
    setInput(e.target.value)
  }

  const contextValues = {
    handleChange,
    input
  }

  // console.log(input);

  return (
    <>
      <Context.Provider value={contextValues}>
        <Header />
        <Main />
        <footer/>
      </Context.Provider>
    </>
  );
}

export default App;
