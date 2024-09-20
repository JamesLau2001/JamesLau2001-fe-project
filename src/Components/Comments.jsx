import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";
import ErrorComponent from "./ErrorComponent";
const Comments = ({ article_id, username }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    }).catch((err)=>{
      setError(err)
    });
  }, []);

  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  if (error){
    return <ErrorComponent message={error.message}/>
  }
  return (
    <div className="comments">
      <h3>Comments: </h3>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} username={username} />
        ))
      )}
    </div>
  );
};

export default Comments;
