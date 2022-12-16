import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
flex-direction: column;
cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  &:hover ${Info}{
      opacity: 1;
    }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;


const Title = styled.h1`
    color: black;
    margin-bottom: 25px;
    transition: all 0.5s ease;
    padding: 20px;
    font-size: 35px;
    &:hover {
      transform: scale(1.1);
      display: flex;
      align-items: center;
    justify-content: center;
    color: orange;
    margin: 10px;
    }
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: black;
    border-radius: 20px;
    color:white;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.5s ease;
    &:hover {
      background-color: #ffcc00;
      transform: scale(1.1);
      display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    }

`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
