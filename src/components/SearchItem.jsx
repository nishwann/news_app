import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { getAllNews } from "../services/newsService";
import Navbar from "./Navbar";

const SearchItem = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedArticles, setSearchedArticles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchedNews();
    }, 300); 

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchedNews = async () => {
    if (!searchQuery) return;
    try {
      const searchResults = await getAllNews(searchQuery);
      setSearchedArticles(searchResults || []);
    } catch (error) {
      console.error("Error fetching news:", error);
      setSearchedArticles([]);
    }
  };

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      <div className="news-container">
        {searchedArticles.length > 0 ? (
          searchedArticles.map((news, index) => (
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
            No articles found.<span>Please search for something.</span>
          </h2>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
