import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #004343;
  color: #ff9d00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Ada Diskon dan Promo menarik, item Bundle 20% OFF</Container>;
};

export default Announcement;
