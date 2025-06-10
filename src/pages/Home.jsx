import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;