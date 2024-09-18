import { useState } from "react";
import { deleteComment } from "../api";
const CommentCard = ({ comment, username }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete = (event) => {
    event.preventDefault();

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (confirmDelete) {
      deleteComment(comment.comment_id).then(() => {
        setIsDeleted(true);
      });
    }
  };

  if (isDeleted) {
    return null;
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
