const ArticleCard = ({ article }) => {
  return (
    <>
      <div className="article-card">
        <img className="article-image" src={article.article_img_url} />
        <h2 className="article-title">{article.title}</h2>
        <h3 className="article-topic">Topic: {article.topic}</h3>
      </div>
    </>
  );
};
export default ArticleCard;
