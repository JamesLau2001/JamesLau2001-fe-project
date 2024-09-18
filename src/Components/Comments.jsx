import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  return (
    <div className="comments">
      <h3>Comments: </h3>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      )}
    </div>
  );
};

export default Comments;
