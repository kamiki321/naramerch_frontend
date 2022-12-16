import styled from "styled-components";
import React from 'react';
import bg from "../img/6.jpg";
import { mobile } from "../responsive";


const Container = styled.div`
    width: 100%;
    height : 70vh;
    display: flex;
    opacity: 100%;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Title = styled.h1`
font-size : 100px;
font-family: Arial;
color: #ffd900;
font-style: italic;
padding-left: 150px;
padding-top: 60px;
text-shadow: 0.1rem 0.2rem grey;
${mobile({ padding: "10px", flexDirection:"column" })}
`;


export const Welcome = () => {
    return (
          <>
          <Container>
            <Title>WELCOME TO OUR STORE!</Title>
          </Container>
          </>
    )
  }