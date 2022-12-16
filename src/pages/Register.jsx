import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bgregister from "../img/bg-login.jpg";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgregister});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: teal;
  border-radius: 10px;
  box-shadow: 2px 5px 5px black;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: orange;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  color: black;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  &:hover{
    background-color: orange;
  }
  cursor: pointer;
`;

const Link = styled.a`
  padding: 0px 5px;
  margin-left: 50px;
  font-size: small;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  &:hover{
    color: #ffd503;
  }
`

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    });

    try {
      // console.log(data.get('username'),data.get('email'),data.get('password'))
      await axios.post(`https://pg-tugasakhir-production.up.railway.app/api/v1/cms/register`, {
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
      })
      .then(function(response) {
        console.log(response)
        navigate('../login')
      }
      )
      .catch (function(error){
        console.log(error);
        alert('Failed!')
      }
      )
      // navigate('/login');
    } catch (error) {
      console.log(error);
      alert('Failed!')
    };
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form component="form" onSubmit={handleSubmit} >
          <Input required placeholder="Username" id = 'username'  name = 'username' autoComplete="username" autoFocus />
          <Input required placeholder="Email" type="email" id = 'email' name='email' autoComplete="email"/>
          <Input required placeholder="Password" type="password" id = 'password' name='password' autoComplete="current-password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
          <Link onClick={() => navigate("/login")}>Already have an account? Sign In then!</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
