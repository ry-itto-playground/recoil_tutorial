import { selector } from "recoil";

const fetchArticles = () => {
  return fetch("https://qiita.com/api/v2/items").then((response) =>
    response.json()
  );
};

export const articleQuery = selector({
  key: "articleQuery",
  get: async () => {
    return await fetchArticles();
  },
});
