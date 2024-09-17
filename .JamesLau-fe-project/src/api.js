import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://james-lau-nc-news.onrender.com/",
});

export const getArticles = () => {
  return ncNews.get("/api/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return ncNews.get(`/api/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return ncNews.get(`/api/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchVotesByArticleId = (article_id, inc_votes) => {
  return ncNews
    .patch(`/api/articles/${article_id}`, { inc_votes })
    .then(({ data }) => {
      return data.article;
    });
};
