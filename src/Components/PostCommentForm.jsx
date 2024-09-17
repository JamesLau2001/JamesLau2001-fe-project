import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postComment } from "../api";

const PostCommentForm = () => {
  const { article_id } = useParams();
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, body, "grumpy19").then(() => {
      navigate(-1);
    });
  };
  return (
    <form className="post-comment-form" onSubmit={handleSubmit}>
      <label className="post-comment-label" htmlFor="body">
        Please write your comment here:
      </label>
      <input
        className="post-comment-input"
        name="body"
        onChange={handleBody}
        value={body}
      ></input>
      <button className="post-new-comment-button">Post Comment</button>
    </form>
  );
};

export default PostCommentForm;
