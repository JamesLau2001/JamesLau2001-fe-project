import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles, getTopics } from "../api";
import ArticleCard from "./ArticleCard";
import ErrorComponent from "./ErrorComponent";
const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [topics, setTopics] = useState([]);

  const topicQuery = searchParams.get("topic") || "";
  const sortByQuery = searchParams.get("sort_by") || "created_at";
  const orderQuery = searchParams.get("order") || "desc";
  const params = {
    params: { topic: topicQuery, sort_by: sortByQuery, order: orderQuery },
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    getTopics()
      .then((data) => {
        setTopics(data);
      })
      .catch((err) => {
        setError(err);
      });

    getArticles(params)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [topicQuery, sortByQuery, orderQuery]);

  const handleChange = (event) => {
    const topic = event.target.value;
    setSearchParams({ ...Object.fromEntries(searchParams), topic });
  };

  const handleSortBy = (event) => {
    const sort = event.target.value;
    setSearchParams({ ...Object.fromEntries(searchParams), sort_by: sort });
  };

  const handleOrderChange = (event) => {
    const order = event.target.value;
    setSearchParams({ ...Object.fromEntries(searchParams), order });
  };

  if (loading) {
    return <p>Loading all articles...</p>;
  }
  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  return (
    <>
      <div className="query-wrapper">
        <div className="query-dropdowns">
          <div className="query-dropdown">
            <label htmlFor="topics-select">Filter by topic: </label>
            <select
              id="topics-select"
              className="topics"
              onChange={handleChange}
              value={topicQuery}
            >
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

          <div className="query-dropdown">
            <label htmlFor="sort_by-select">Sort by:</label>
            <select
              id="sort_by-select"
              className="sort"
              onChange={handleSortBy}
              value={sortByQuery}
            >
              <option value="created_at">Date</option>
              <option value="comment_count">Comment Count</option>
              <option value="votes">Votes</option>
            </select>
          </div>

          <div className="query-dropdown">
            <label htmlFor="order-select">Order by:</label>
            <select
              id="order-select"
              className="order"
              onChange={handleOrderChange}
              value={orderQuery}
            >
              <option value="desc">Descending</option>
              <option value="asc">Ascendinng</option>
            </select>
          </div>
        </div>
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
