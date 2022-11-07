import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./modules/Main/Main";
import AboutUs from "./modules/AboutUs/AboutUs";
import NotPage from "./modules/404/404";
import Header from "./modules/Header/Header";
import { useState } from "react";

function App() {
  const [currHeader, setCurrHeader] = useState("");
  const [searchText, setSearchText] = useState("");
  const setHeader = (newHeader) => {
    setCurrHeader(newHeader);
  };

  return (
    <div className="App">
      <Header headerName={currHeader} />
      <Routes>
        <Route
          path="/rickandmorty"
          element={
            <Main
              setHeader={setHeader}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          }
        />
        <Route path="/about" element={<AboutUs setHeader={setHeader} />} />
        <Route path="*" element={<NotPage setHeader={setHeader} />} />
      </Routes>
    </div>
  );
}

export default App;
