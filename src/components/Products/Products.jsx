import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Luxury Watch',
      price: '$1,200',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 2,
      name: 'Leather Bag',
      price: '$950',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 3,
      name: 'Silk Scarf',
      price: '$350',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 4,
      name: 'Gold Bracelet',
      price: '$1,800',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    }
  ];

  return (
    <section className="lux-products">
      <div className="container">
        <h2 className="section-title">Our Collections</h2>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button className="quick-view">Quick View</button>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <button className="view-all-btn">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default Products;