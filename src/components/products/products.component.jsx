import React from 'react';
import Header from '../header/header.component';
import './products.styles.scss'; // スタイルシートをインポート

const Products = () => {
  return (
    <div>
      <Header />
      <div className="products-container">
        <div className="products-hero">
          <h1>Products</h1> {/* "About Us"から"Products"に修正 */}
        </div>
        <div className="products-content">
          <p>
            Welcome to our product page! We offer a wide range of high-quality products
            that meet your needs. Our team is dedicated to providing exceptional
            customer service and ensuring your satisfaction.
          </p>
          <p>
            Our products are sourced from trusted suppliers and go through rigorous
            quality checks to ensure they meet our high standards.
          </p>
          <p>
            Thank you for choosing our products. We look forward to serving you
            and meeting your expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
