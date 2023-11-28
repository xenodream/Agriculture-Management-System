import styled from "styled-components";
import Navbar from "../components/Navbar";
import Line from "../components/Line";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useState } from "react";
import { useRegisterWorkMutation } from "../redux/slices/workApiSlice";
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
const Desc = styled.p`
  @media (max-width: 700px) {
    font-size: 12px;
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
const Select = styled.select`
  max-width: 792px;
  height: 75px;
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 10px;

  background-color: transparent;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  margin-bottom: 20px;
`;
const Option = styled.option``;

const BtnSection = styled.section`
  max-width: 1700px;
  min-height: 100px;
  margin-left: 30px;
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)``;

const RegisterWork = () => {
  const [date, setDate] = useState();
  const [typeOfWork, setTypeOfWork] = useState();
  const [timeOfWork, setTimeOfWork] = useState();
  const [weight, setWeight] = useState();
  const [machine, setMachine] = useState();
  const [description, setDescription] = useState();

  const [registerWork] = useRegisterWorkMutation();
  const { loggedUser } = useSelector((store) => store.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await registerWork({
        date,
        typeOfWork,
        timeOfWork,
        weight,
        machine,
        description,
      }).unwrap();

      toast.success("Zarejestrowano pracę");
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
          <Title>Rejestracja czasu pracy</Title>
          <Desc>ID pracownika: {loggedUser.id}</Desc>
        </Header>
        <NewSection>
          <AddSection>
            <StyledLink to="/worker">
              <AddButton>-</AddButton>
            </StyledLink>
            <AddTitle>Powrót</AddTitle>
          </AddSection>
        </NewSection>
      </Section>
      <Form onSubmit={handleSubmit}>
        <Input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          placeholder="data"
          required
        ></Input>

        <Select onChange={(e) => setTypeOfWork(e.target.value)}>
          <Option value="" disabled selected>
            Rodzaj wykonanej pracy
          </Option>
          <Option>Zbieranie ziemniaków</Option>
          <Option>Zbieranie jabłek</Option>
          <Option>Prace porządkowe</Option>
          <Option>Nawadnianie upraw</Option>
        </Select>
        <Input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Opis wykonanej pracy"
          required
        ></Input>
        <Input
          type="number"
          min="1"
          placeholder="czas pracy (w min)"
          required
          onChange={(e) => setTimeOfWork(e.target.value)}
        ></Input>
        <Input
          onChange={(e) => setWeight(e.target.value)}
          min="0"
          type="number"
          placeholder="wielkość zbioru (w kg)"
          required
        ></Input>
        <Select onChange={(e) => setMachine(e.target.value)}>
          <Option value="" disabled selected>
            Wybierz maszynę
          </Option>
          <Option>pług</Option>
          <Option>kombajn XTQ 200</Option>
          <Option>kombajn ZWE 10-10</Option>
          <Option>kombajn FARMWORKER Z100</Option>
          <Option>Praca ręczna</Option>
        </Select>

        <BtnSection>
          <Button title="ZAREJESTRUJ"></Button>
        </BtnSection>
        <ToastContainer></ToastContainer>
      </Form>

      <Footer></Footer>
    </>
  );
};

export default RegisterWork;
