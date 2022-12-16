import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";
import bglogin from "../img/bg-register.jpg";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bglogin});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`

  width: 25%;
  padding: 20px;
  background-color: #2e5641;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  background-color: transparent;
  color: white;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover{
    background-color: white;
    color: orange;
  }
`;


const Will = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: white;
  &:hover{
    background-color: #ffdd00
  }
`;

export const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    
    await axios.post(`https://pg-tugasakhir-production.up.railway.app/api/v1/cms/login`, {
      email: data.get('email'),
      password: data.get('password'),
    })
      .then(function (response) {
        console.log(response);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.id)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('email', response.data.email)
        navigate('/');

      })
      .catch(function (error) {
        console.log(error);
        alert('Invalid username or password! Try enter another') // jika gagal, tampilkan alert 'Login Gagal'
      });
  };
  return (
    <Container>

      <Wrapper>
        <Title>SIGN IN</Title>
        <Form component="form" onSubmit={handleSubmit}>
          <Input required placeholder="email" id="email" name = "email" autoComplete="email" autoFocus/>
          <Input required placeholder="password" id="password" name="password" type="password" autoComplete="current-password" />
          <Button type="submit">LOGIN</Button>
          <Will onClick={() => navigate("/forgetpassword")}>FORGET YOUR PASSWORD?</Will>
          <Will onClick={() => navigate("/register")}>DON'T HAVE AN ACCOUNT YET? REGISTER NOW!</Will>
        </Form>
      </Wrapper>
    </Container>
  );
};
