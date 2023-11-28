import styled from "styled-components";
import Navbar from "../components/Navbar";
import Line from "../components/Line";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import LatestCollectionDays from "../components/LatestCollectionDays";
import PayoutsComponent from "../components/PayoutsComponent";
import MachineryUsageComponent from "../components/MachineryUsageComponent";
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

const PayoutsAndMachineSection = styled.section`
  max-width: 1700px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  min-height: 500px;
  display: flex;
  margin-bottom: 100px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)``;

const WorkerPanel = () => {
  const { loggedUser } = useSelector((store) => store.user);

  return (
    <>
      <Navbar></Navbar>
      <Line></Line>
      <Section>
        <Header>
          <Title>Witaj {`${loggedUser.name} ${loggedUser.surname}`}</Title>
          <Desc>ID pracownika: {loggedUser.id}</Desc>
        </Header>
        <NewSection>
          <AddSection>
            <StyledLink to="/newday">
              <AddButton>+</AddButton>
            </StyledLink>
            <AddTitle>Zarejestruj dzień pracy</AddTitle>
          </AddSection>
        </NewSection>
      </Section>

      <LatestCollectionDays></LatestCollectionDays>

      <PayoutsAndMachineSection>
        <PayoutsComponent></PayoutsComponent>
        <MachineryUsageComponent></MachineryUsageComponent>
      </PayoutsAndMachineSection>
      <Footer></Footer>
    </>
  );
};

export default WorkerPanel;
