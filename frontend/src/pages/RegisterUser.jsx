import styled from "styled-components";
import Navbar from "../components/Navbar";
import Line from "../components/Line";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserRegisterMutation } from "../redux/slices/usersApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section = styled.section`
  max-width: 1700px;
  min-height: 200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-top: 50px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Header = styled.section`
  padding-left: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 0px;
  @media (max-width: 700px) {
    font-size: 30px;
    font-weight: 300;
  }
`;

const NewSection = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  @media (max-width: 700px) {
    justify-content: flex-start;
    margin-left: 30px;
  }
`;
const AddSection = styled.section`
  display: flex;
  align-items: center;
  width: 250px;
`;
const AddButton = styled.button`
  width: 49px;
  height: 49px;
  background-color: #a57858;
  border: none;
  border-radius: 4px;
  font-size: 25px;
  color: white;
  transition: 0.3s;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 35px;
    height: 35px;
  }
  &:hover {
    color: #a57858;
    background-color: transparent;
    border: 1px solid #a57858;
  }
`;

const AddTitle = styled.p`
  margin-left: 20px;
  font-size: 18px;
  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 1700px;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
`;
const Input = styled.input`
  max-width: 750px;
  height: 75px;
  background-color: transparent;
  border: 1px solid #c0c0c0;
  font-size: 13px;
  border-radius: 5px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 30px;
`;

const BtnSection = styled.section`
  max-width: 1700px;
  min-height: 100px;
  margin-left: 30px;
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)``;

const RegisterUser = () => {
  const [workerId, setWorkerId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [coefficient, setCoefficient] = useState("");
  const [registerUser] = useUserRegisterMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        id: workerId,
        name,
        surname,
        password,
        salary_coefficient: (Number(coefficient) / 60).toFixed(4),
      });

      if (response?.data?.code === "23505") {
        toast.error("Pracownik o podanym id jest już zarejestrowany");
      } else {
        toast.success("Zarejestrowano pracownika");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <Line></Line>
      <Section>
        <Header>
          <Title>Rejestracja pracownika</Title>
        </Header>
        <NewSection>
          <AddSection>
            <StyledLink to="/admin-panel">
              <AddButton>-</AddButton>
            </StyledLink>
            <AddTitle>Powrót</AddTitle>
          </AddSection>
        </NewSection>
        <ToastContainer></ToastContainer>
      </Section>
      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="ID pracownika"
          required
          onChange={(e) => setWorkerId(e.target.value)}
        ></Input>
        <Input
          type="text"
          placeholder="Imię"
          required
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          type="text"
          placeholder="Nazwisko"
          required
          onChange={(e) => setSurname(e.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="Nowe hasło"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          type="number"
          min="1"
          max="100"
          step="0.01"
          placeholder="Stawka PLN / h"
          onChange={(e) => setCoefficient(e.target.value)}
        ></Input>
        <BtnSection>
          <Button title="ZAREJESTRUJ"></Button>
        </BtnSection>
      </Form>

      <Footer></Footer>
    </>
  );
};

export default RegisterUser;
