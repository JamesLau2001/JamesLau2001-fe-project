import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading all articles...</p>;
  }
  
  return (
    <>
      <div className="article-container">
        {articles.map((article, index) => {
          return <ArticleCard key={index} article={article} />;
        })}
      </div>
    </>
  );
};

export default ArticleContainer;
