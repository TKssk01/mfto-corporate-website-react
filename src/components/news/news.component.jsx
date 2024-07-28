import React from 'react';
import Header from '../header/header.component';
import './news.styles.scss';  // 新しいCSSファイルをインポート

const News = () => {
  return (
    <div className="news-container">
      <Header />
      <div className="news-content">
        <h1 className="news-title">News</h1>
        <div className="coming-soon">
          Coming Soon
        </div>
      </div>
    </div>
  );
};

export default News;