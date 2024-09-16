import axios from "axios"

const ncNews = axios.create({
    baseURL: "https://james-lau-nc-news.onrender.com/"
})

export const getArticles = () => {
    return ncNews.get("/api/articles").then(({data})=>{
        return data.articles
    })
}

