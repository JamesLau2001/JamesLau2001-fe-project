import axios from "axios"

const ncNews = axios.create({
    baseURL: "https://james-lau-nc-news.onrender.com/"
})

export const getArticles = () => {
    return ncNews.get("/api/articles").then(({data})=>{
        return data.articles
    })
}

export const getArticleById = (article_id) => {
    return ncNews.get(`/api/articles/${article_id}`).then(({data})=>{
        console.log(data)
        return data.article
        
    })
}

getArticleById(1)