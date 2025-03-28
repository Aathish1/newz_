import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
  //     import.meta.env.VITE_API_KEY
  //   }`;
  //   fetch(url)
  //     .then((Response) => Response.json())
  //     .then((data) => setArticles(data.articles));
  // }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        if (!apiKey) throw new Error("API key is missing");

        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles || []); // Handle undefined articles
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);
  if (loading)
    return (
      <div
        className="text-center"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Loading news...
      </div>
    );
  if (error)
    return <div className="text-center text-danger">Error: {error}</div>;

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-bg-primary"> NEWZ</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
