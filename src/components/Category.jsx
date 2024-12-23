import { Navbar } from "react-bootstrap";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import { getHeadlines } from "../services/newsService";

const Category = () => {
    const [category, setCategory] = useState("");
    const [categoryNews, setCategoryNews] = useState([]);
    debugger


    useEffect(() => {
        fetchCategoryNews();
      }, [category]);

    const fetchCategoryNews = async () => {
        try {
          const newsData = await getHeadlines("news", category);
          setCategoryNews(newsData);
        } catch (error) {
          console.error("Error fetching category news:", error);
        } 
      };

  return (
    <div>
      <Navbar setCategory={setCategory} />
      {categoryNews.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.imageUrl}
            url={news.redirectionUrl}
          />
        );
      })}
    </div>  )
}

export default Category