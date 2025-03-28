import React from "react";
import image from "../assets/news_.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h3
          className="card-title"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: "500" }}
        >
          {title.length > 45 ? `${title.slice(0, 45)}...` : title}{" "}
        </h3>
        <p
          className="card-text"
          style={{ fontFamily: "'Open Sans', sans-serif", lineHeight: "1.6" }}
        >
          {description
            ? description.slice(0, 90)
            : " It is the information about something that has just happened."}
        </p>
        <a href={url} className="btn btn-primary" target="_blank">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
