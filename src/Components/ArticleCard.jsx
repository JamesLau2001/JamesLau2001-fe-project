import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <>
      <div className="article-card">
        <Link to={`/articles/${article.article_id}`}>
          <img className="article-image" src={article.article_img_url} />
          <h2>{article.title}</h2>
          <h3 className="article-topic">Topic: {article.topic}</h3>
        </Link>
      </div>
    </>
  );
};
export default ArticleCard;
