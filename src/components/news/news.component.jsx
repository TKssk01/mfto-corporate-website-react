import React from 'react';
import Header from '../header/header.component';
import './news.styles.scss'; // スタイルシートをインポート

const News = () => {
  return (
    <div>
      <Header />
      <div className="news-container">
        <div className="news-hero">
          <h1>News</h1>
        </div>
        <div className="news-content">
          <p>
            Welcome to our news page! Stay updated with the latest news and
            announcements from our company. We are committed to keeping you
            informed about our latest developments and activities.
          </p>
          <p>
            Our news section covers a wide range of topics, including new product
            launches, company events, industry insights, and much more.
          </p>
          <p>
            Thank you for visiting our news page. We look forward to keeping you
            updated with all the exciting news and updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
