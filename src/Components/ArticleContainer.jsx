import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles, getTopics } from "../api";
import ArticleCard from "./ArticleCard";

const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [topics, setTopics] = useState([]);

  const topicQuery = searchParams.get("topic") || "";
  const params = { params: { topic: topicQuery } };
  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data);
    });

    getArticles(params).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [topicQuery]);
  const handleChange = (event) => {
    const topic = event.target.value;
    setSearchParams(topic ? { topic } : "");
  };

  if (loading) {
    return <p>Loading all articles...</p>;
  }

  return (
    <>
      <div className="topic-dropdown">
        <label>Filter by topic: </label>
        <select className="topics" onChange={handleChange} value={topicQuery}>
          <option value="">All Topics</option>
          {topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
      </div>

      <div className="article-container">
        {articles.map((article, index) => {
          return <ArticleCard key={index} article={article} />;
        })}
      </div>
    </>
  );
};

export default ArticleContainer;
