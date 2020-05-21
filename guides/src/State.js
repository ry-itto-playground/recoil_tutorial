import { selector } from "recoil";

const fetchArticles = (keyword) => {
  return fetch(
    `https://qiita.com/api/v2/items?query=${keyword}`
  ).then((response) => response.json());
};

export const articleQuery = (keyword) =>
  selector({
    key: "articleQuery",
    get: async () => {
      return await fetchArticles(keyword);
    },
  });
