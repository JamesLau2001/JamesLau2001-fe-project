import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ArticleContainer from "./Components/ArticleContainer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleContainer />} />
      </Routes>
    </div>
  );
}

export default App;
