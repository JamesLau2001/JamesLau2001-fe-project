import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById, patchVotesByArticleId } from "../api";

import Comments from "./Comments";
const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentVotes, setCurrentVotes] = useState(0);

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data);
      setCurrentVotes(data.votes);
      setLoading(false);
    });
  }, [article_id]);

  const handleVote = (voteToHandle) => {
    setCurrentVotes((prevVotes) => prevVotes + voteToHandle);
    patchVotesByArticleId(article_id, voteToHandle).then((newData) => {
      setArticle(newData);
    });
  };

  if (loading) return <p>Loading article...</p>;

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
        <button onClick={() => handleVote(1)}>Like</button>
        <button onClick={() => handleVote(-1)}>Dislike</button>
      </div>
      <p>Written at: {article.created_at}</p>

      <Link to={`/articles/${article_id}/comments`}><button>Post Comment</button></Link>

      <Comments article_id={article_id} />
    </div>
  );
};

export default ArticlePage;
