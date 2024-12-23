import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { getAllNews } from "../services/newsService";
import Navbar from "./Navbar";

const SearchItem = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedArticles, setSearchedArticles] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      getSeacrhedNews();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSeacrhedNews = async () => {
    if (!searchQuery) return;
    const searchResults = await getAllNews(searchQuery);
    setSearchedArticles(searchResults);
  };
  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      {searchedArticles.map((news, index) => {
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
    </div>
  );
};

export default SearchItem;
