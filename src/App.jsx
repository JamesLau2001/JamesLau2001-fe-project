import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ArticleContainer from "./Components/ArticleContainer";
import ArticlePage from "./Components/ArticlePage"
import PostCommentForm from "./Components/PostCommentForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleContainer />} />
        <Route path="/articles/:article_id" element={<ArticlePage/>}/>
        <Route path="/articles/:article_id/comments" element={<PostCommentForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
