import React from 'react'
import bg3 from "../img/bg3.jpg";
import styled from "styled-components"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Background = styled.div`
    width: 100%;
    height: auto;
    background-image: url(${bg3});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
const Container = styled.div`
    height  : 90vh ;
    background-image: url(${bg3});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
const Info = styled.div`
  width: 50%;
  flex : 1;
  position: absolute; 
  padding: 10px;
  left: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IMGcontainer = styled.div`
  width: 50%;
  flex : 1;
  position: absolute;
  background-color: white;  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 30%;
  position: absolute;
  padding : 10px;
  top: 10px;
  left: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Title = styled.h1`
  font-size: 60px;
  font-weight:600;
  color: white;
  margin: 5px 20px;
  text-shadow: 3px 3px 5px black;
`;

const Desc = styled.p`
    color: white;
    margin: 5px 20px;
  text-shadow: 3px 3px 5px black;
`;

export const About = () => {
    return (
      <div> 
          <Background>
          <Navbar />
              <Container>
                  <IMGcontainer>
                      <Image img src="../img/menkor.png"/>
                  </IMGcontainer>
                  <Info>
                      <Title>ABOUT US!</Title>
                      <Desc>NARAMERCH merupakan website resmi milik 'Resimen Korps Kadet Mahasiswa' S1 Unhan RI,
                          Website ini dibuat dengan kolaborasi antara NaraCreative dan Resimen Korps Kadet Mahasiswa itu sendiri 
                          . Memiliki tujuan untuk memperjual-belikan 'Merchandise' official milik MENKORPS UNHAN RI.
                      </Desc>
                  </Info>
              </Container>
          <Footer />
          </Background>
      </div>
    )
  }
  
