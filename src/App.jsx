import { useState, createContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

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
        <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;
