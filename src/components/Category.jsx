import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import { getHeadlines } from "../services/newsService";
import Navbar from "./Navbar";

const Category = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetchCategoryNews();
  }, [category]);

  const fetchCategoryNews = async () => {
    if (!category) return;
    try {
      const newsData = await getHeadlines(category);
      setCategoryNews(newsData || []);
    } catch (error) {
      console.error("Error fetching category news:", error);
      setCategoryNews([]);
    }
  };

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <div className="news-container">
        {categoryNews.length > 0 ? (
          categoryNews.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.imageUrl}
              url={news.redirectionUrl}
            />
          ))
        ) : (
          <h2 className="text-center">
            No news available for this category.
            <span>Please select a different category.</span>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Category;
