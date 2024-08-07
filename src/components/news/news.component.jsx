import React from 'react';
import Header from '../header/header.component';
import './news.styles.scss';

// const News = () => {
//   return (
//     <div className="news">
//       <Header />
//       <div className="news__container">
//         <h1 className="news__title">News</h1>
//         <div className="coming-soon">
//           Coming Soon
//         </div>
//       </div>
//     </div>
//   );
// };

const News = () => {
  const newsItems = [
    { date: '2024.08.10', title: 'Notice of Summer Vacation' },
    { date: '2024.07.23', title: '2024/7/23(Tue) Website Renewal' },
  ];

  return (
    <div className="news">
      <Header />
      <div className="news__container">
        <h1 className="news__title">News</h1>
        
        <div className="news__list">
          {newsItems.map((item, index) => (
            <div key={index} className="news__item">
              <span className="news__item-date">{item.date}</span>
              <span className="news__item-title">{item.title}</span>
              <button className="news__item-button">→</button>
            </div>
          ))}
        </div>

        <div className="news__archive">
          <select className="news__archive-select">
            <option>Select Archive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default News;

