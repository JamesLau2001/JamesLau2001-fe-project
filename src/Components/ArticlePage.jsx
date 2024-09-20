import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById, patchVotesByArticleId } from "../api";
import ErrorComponent from "./ErrorComponent";
import Comments from "./Comments";
const ArticlePage = ({ username }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentVotes, setCurrentVotes] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setCurrentVotes(data.votes);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleVote = (voteToHandle) => {
    setCurrentVotes((prevVotes) => prevVotes + voteToHandle);
    patchVotesByArticleId(article_id, voteToHandle)
      .then((newData) => {
        setArticle(newData);
      })
      .catch((err) => {
        setError(err);
        setCurrentVotes((prevVotes) => prevVotes - voteToHandle);
      });
  };

  if (loading) return <p>Loading article...</p>;
  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  return (
    <div className="article-page">
      <h2 className="article-title">{article.title}</h2>
      <div className="author-topic">
        <p className="author-topic-tags">Written by: {article.author}</p>
        <p className="author-topic-tags">Topic: {article.topic}</p>
      </div>
      <img className="individual-image" src={article.article_img_url} />
      <p className="article-body">{article.body}</p>
      <div className="article-votes">
        <p className="article-current-votes">Votes: {currentVotes}</p>
        <button className= "like-dislike-buttons" onClick={() => handleVote(1)}>Like</button>
        <button className= "like-dislike-buttons" onClick={() => handleVote(-1)}>Dislike</button>
      </div>
      <p>Written at: {article.created_at}</p>

      <Link to={`/articles/${article_id}/comments`}>
        <button className= "article-post-comment">Post Comment</button>
      </Link>

      <Comments article_id={article_id} username={username} />
    </div>
  );
};

export default ArticlePage;
