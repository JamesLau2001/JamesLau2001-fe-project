import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://james-lau-nc-news.onrender.com/",
});

export const getArticles = (query) => {
  return ncNews.get("/api/articles", query).then(({ data }) => {
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

export const postComment = (article_id, body, author) => {
  return ncNews
    .post(`/api/articles/${article_id}/comments`, { body, author })
    .then(({ data }) => {
      return data.comment;
    });
};

export const getUsers = () => {
  return ncNews.get(`/api/users`).then(({data})=>{
    return data.users
  })
}

export const deleteComment = (comment_id) => {
  return ncNews.delete(`/api/comments/${comment_id}`)
}

export const getTopics = () => {
  return ncNews.get(`/api/topics`).then(({data})=>{
    return data.topics
  })
}
