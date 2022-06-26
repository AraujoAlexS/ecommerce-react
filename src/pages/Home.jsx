import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
