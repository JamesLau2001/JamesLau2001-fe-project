const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p>Written by: {comment.author}</p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <p>Written at: {comment.created_at}</p>
    </div>
  );
};

export default CommentCard;
