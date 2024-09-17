import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import Comments from "./Comments"
const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data);
      setLoading(false);
    });
  }, [article_id]);

  if (loading) return <p>Loading article...</p>;

  return (
    <div className="article-page">
      <h2 className="article-title">{article.title}</h2>
      <div className= "author-topic">
        <p className="author-topic-tags">Written by: {article.author}</p>
        <p className="author-topic-tags">Topic: {article.topic}</p>
      </div>
      <img src={article.article_img_url} />
      <p className="article-body">{article.body}</p>
      <p className="article-votes">Votes: {article.votes}</p>
      <p>Written at: {article.created_at}</p>
      <Comments article_id = {article_id}/>
    </div>
  );
};

export default ArticlePage;
