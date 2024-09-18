import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ArticleContainer from "./Components/ArticleContainer";
import ArticlePage from "./Components/ArticlePage";
import PostCommentForm from "./Components/PostCommentForm";
import Login from "./Components/Login";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="app">
      <Header />
      <Login username={username} setUsername={setUsername} />
      <Routes>
        <Route path="/" element={<ArticleContainer />} />
        <Route path="/articles/:article_id" element={<ArticlePage username = {username}/>} />
        <Route
          path="/articles/:article_id/comments"
          element={<PostCommentForm username = {username}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
