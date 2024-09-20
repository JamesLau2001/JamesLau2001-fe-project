import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ArticleContainer from "./Components/ArticleContainer";
import ArticlePage from "./Components/ArticlePage";
import PostCommentForm from "./Components/PostCommentForm";
import Nav from "./Components/Nav";
import NotFound from "./Components/NotFound";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="app">
      <Header />
      <Nav username={username} setUsername={setUsername} />
      <Routes>
        <Route path="/" element={<ArticleContainer />} />
        <Route
          path="/articles/:article_id"
          element={<ArticlePage username={username} />}
        />
        <Route
          path="/articles/:article_id/comments"
          element={<PostCommentForm username={username} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
