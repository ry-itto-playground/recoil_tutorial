import React from "react";
import ArticleList from "./ArticleList";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ArticleList />
      </React.Suspense>
    </RecoilRoot>
  );
}

export default App;
