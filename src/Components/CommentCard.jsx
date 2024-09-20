import { useState } from "react";
import { deleteComment } from "../api";
import ErrorComponent from "./ErrorComponent";
const CommentCard = ({ comment, username }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState(null);
  
  const handleDelete = (event) => {
    event.preventDefault();

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (confirmDelete) {
      deleteComment(comment.comment_id)
        .then(() => {
          setIsDeleted(true);
        })
        .catch((err) => {
          setError(err);
        });
    }
  };

  if (isDeleted) {
    return null;
  }

  if (error) {
    return <ErrorComponent message = {error.message}/>;
  }

  return (
    <div className="comment-card">
      <p>Written by: {comment.author}</p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <p>Written at: {comment.created_at}</p>
      {username === comment.author ? (
        <button onClick={handleDelete} disabled={isDeleted}>
          Delete Comment
        </button>
      ) : null}
    </div>
  );
};

export default CommentCard;
