import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { getAllNews } from "../services/newsService";
import Navbar from "./Navbar";
import Loader from "./Loader";

const SearchItem = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedArticles, setSearchedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchedNews();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchedNews = async () => {
    setLoading(false);
    if (!searchQuery) return;
    try {
      setLoading(false);
      const searchResults = await getAllNews(searchQuery);
      setSearchedArticles(searchResults || []);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching news:", error);
      setSearchedArticles([]);
    }
  };

  return (
    <>
      {loading ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <Loader size="3x" message="Loading content, please wait..." />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default SearchItem;
