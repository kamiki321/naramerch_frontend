import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bg1 from "../img/bg.png";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";
import { Welcome } from "../components/Welcome";

const Background = styled.div`
    width: 100%;
    height: auto;
    background-image: url(${bg1});
    background-size: contain;
    background-position: center;
    background-repeat: repeat;
`

const Home = () => {
  return (
    <div>
      <Background>
      <Announcement />
      <Navbar />
      <Welcome/>
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </Background>
    </div>
  );
};

export default Home;
