import React from "react";
import { articleQuery } from "./State";
import { useRecoilValue } from "recoil";

const ArticleList = () => {
  const articles = useRecoilValue(articleQuery);
  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <span>{article.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
