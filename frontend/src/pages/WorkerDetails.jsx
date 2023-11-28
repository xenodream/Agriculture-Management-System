import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Line from "../components/Line";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useState } from "react";
import { useUpdateWorkerDetailsMutation } from "../redux/slices/adminApiSlice";

const Section = styled.section`
  max-width: 1700px;
  min-height: 200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-top: 50px;
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
`;
const Desc = styled.p``;
const NewSection = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
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

const BtnSection = styled.section`
  max-width: 1700px;
  min-height: 100px;
  margin-left: 30px;
  margin-top: 40px;
  display: flex;
  align-items: center;
`;
const AddSection = styled.section`
  display: flex;
  align-items: center;
  width: 250px;
`;
const StyledLink = styled(Link)``;

const WorkerDetails = () => {
  const { id } = useParams();

  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [salary, setSalary] = useState("");
  const [updateUser] = useUpdateWorkerDetailsMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateUser({ id, name, surname, salary });
  };

  return (
    <>
      <Navbar></Navbar>
      <Line></Line>
      <Section>
        <Header>
          <Title>Edytuj dane pracownika</Title>
          <Desc>ID pracownika: {id}</Desc>
        </Header>
        <NewSection></NewSection>
        <AddSection>
          <StyledLink to="/admin-panel">
            <AddButton>-</AddButton>
          </StyledLink>
          <AddTitle>Powrót</AddTitle>
        </AddSection>
      </Section>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          required
          placeholder="Imię"
          onChange={(e) => setName(String(e.target.value))}
        ></Input>

        <Input
          type="text"
          placeholder="Nazwisko"
          required
          onChange={(e) => setSurname(e.target.value)}
        ></Input>
        <Input
          type="number"
          step="0.01"
          min="1"
          placeholder="Stawka godzinowa"
          onChange={(e) => setSalary(e.target.value)}
          required
        ></Input>

        <BtnSection>
          <Button title="ZAREJESTRUJ"></Button>
        </BtnSection>
      </Form>

      <Footer></Footer>
    </>
  );
};

export default WorkerDetails;
