import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";
import Button from "./Button";
import { useState } from "react";
import { useUserLoginMutation } from "../redux/slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../redux/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.section`
  max-width: 1700px;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding-bottom: 150px;
`;

const Form = styled.form`
  text-align: center;
  margin-top: 50px;
`;
const Input = styled.input`
  width: 38.5vw;
  max-width: 271px;
  height: 75px;
  background-color: transparent;
  border: 1px solid #c0c0c0;
  font-size: 12px;

  border-radius: 5px;
`;
const LongInput = styled.input`
  width: 80vw;
  max-width: 558px;
  height: 75px;
  background-color: transparent;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  font-size: 12px;
`;
const BtnSection = styled.section`
  width: 100%;
  height: 60px;
  margin-top: 50px;
`;
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useUserLoginMutation();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await login({ id, name, surname, password }).unwrap();
      dispatch(setLoggedUser(response));
      if (id === "15") {
        navigate("/admin-panel");
        window.scrollTo(0, 0);
      } else {
        navigate("/worker");
        window.scrollTo(0, 0);
      }
    } catch (err) {
      toast.error(err.data);
    }
  };

  return (
    <Container>
      <ComponentTitle
        title="Zaloguj się do systemu"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
      ></ComponentTitle>
      <Form onSubmit={handleSubmit}>
        <LongInput
          required
          onChange={(e) => setId(e.target.value)}
          type="number"
          placeholder="ID pracownika"
          style={{ marginBottom: "10px", paddingLeft: "20px" }}
        ></LongInput>
        <br />

        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Imię"
          required
          style={{ marginRight: "5px", paddingLeft: "10px" }}
        ></Input>
        <Input
          required
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="Nazwisko"
          style={{ marginLeft: "5px", paddingLeft: "10px" }}
        ></Input>
        <br />

        <LongInput
          required
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Hasło"
          style={{ marginTop: "10px", paddingLeft: "20px" }}
        ></LongInput>
        <BtnSection>
          <Button title="ZALOGUJ"></Button>
        </BtnSection>
      </Form>
      <ToastContainer></ToastContainer>
    </Container>
  );
};

export default LoginForm;
