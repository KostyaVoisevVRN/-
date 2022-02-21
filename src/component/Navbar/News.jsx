import React from "react";
import v from "./News.module.css";

const News = (props) => {
  return (
    <div className={v.content}>
      {props.newsPage.news.map((news) => {
        return (
          <React.Fragment key={news.id}>
            <div>
              <img src={news.src} className={v.images} />
            </div>
            <div className={v.data}>{news.label}</div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default News;
