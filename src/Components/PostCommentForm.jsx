import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postComment } from "../api";

const PostCommentForm = ({ username }) => {
  const { article_id } = useParams();
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let validationError = "";

    if (!username || username === "") {
      validationError =
        "You must select a user from the dropdown list to post a comment.";
    } else if (body.trim() === "") {
      validationError = "Comment box cannot be empty.";
    }

    if (validationError) {
      setError(validationError);
    } else {
      postComment(article_id, body, username).then(() => {
        navigate(-1);
      });
    }
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
      {error ? <p>{error}</p> : null}
      <button className="post-new-comment-button">Post Comment</button>
    </form>
  );
};

export default PostCommentForm;
