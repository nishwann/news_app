import { useEffect, useRef } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";
import Corosal from "./Corosal";
import image from "../assets/images/new.jpg";
import Loader from "./Loader";
import { getAllNews } from "../services/newsService";


const NewsBoard = () => {
  const [loading, setLoading] = useState(true);
  const [allNews, setAllNews] = useState([]);
  const [pages, setPages] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null);
  const images = [image];

  console.log("artucllessssssss", allNews);

  useEffect(() => {
    getNewsData();
  }, [pages]);

  const getNewsData = async () => {
    if (!hasMore) return;

    setLoading(true);
    try {
      const newsData = await getAllNews("news", pages, 10);
      if (newsData.length === 0) {
        setHasMore(false);
      } else {
        setLoading(false);
        setAllNews((prevNews) => [...prevNews, ...newsData]);
      }
    } catch (error) {
      console.error("NEWS_FEEDS_PAGE:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container.scrollHeight - container.scrollTop <=
        container.clientHeight + 100 &&
      !loading &&
      hasMore
    ) {
      setPages((prevPage) => prevPage + 1);
    }
  };



  return (
    <>
      {loading ? (
        <div ref={containerRef} onScroll={handleScroll}className="vh-100 d-flex justify-content-center align-items-center">
          <Loader
            size="3x"
            message="Loading content, please wait..."
          />
        </div>
      ) : (
        <div>
          <h2 className="text-center">
            Latest<span>News</span>
          </h2>
          <Corosal
            title="My Carousel"
            description="This is a carousel component"
            images={images}
          />{" "}
          {allNews.map((news, index) => {
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
      )}
    </>
  );
};

export default NewsBoard;
