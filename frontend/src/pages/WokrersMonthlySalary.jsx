import Footer from "../components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Line from "../components/Line";
import PanelSectionTitle from "../components/PanelSectionTitle";
import { useGetAllWorkersSalaryQuery } from "../redux/slices/adminApiSlice";
import { useState } from "react";
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
  @media (max-width: 700px) {
    width: 35px;
    height: 35px;
  }
  cursor: pointer;
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

const PanelSectionHeader = styled.section`
  height: 100px;
  padding-top: 10px;
  padding-left: 40px;
  display: flex;
`;

const PanelSectionDescription = styled.section`
  width: 100%;
  min-height: 300px;
`;
const PanelSectionDescriptionHeader = styled.section`
  margin-left: 40px;
  margin-right: 40px;
  height: 75px;
  margin-top: 30px;
  box-sizing: border-box;
  display: flex;

  font-size: 13px;
  font-weight: 500;
`;
const PanelSectionRow = styled.section`
  margin-left: 40px;
  margin-right: 40px;
  height: 75px;
  margin-top: 2px;
  box-sizing: border-box;
  display: flex;
  border-top: 1px solid #ebebeb;
`;
const PanelSectionData = styled.section`
  flex: 1;
  margin: 10px;
  display: flex;
  align-items: center;
  font-size: 13px;
`;
const PanelSectionButton = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

const PayoutsSection = styled.section`
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  background-color: #ffffff;
  border-radius: 7px;
  margin-right: 15px;
`;

const StyledLink = styled(Link)``;

const Input = styled.input`
  width: 15 0px;
  height: 40px;
  text-align: center;
  border-radius: 5px;
  color: #8a8a8a;
  border: 1px solid #d1d1d1;
  margin: 5px;
`;

const WorkersMonthlySalary = () => {
  const { data, isLoading, isError } = useGetAllWorkersSalaryQuery();
  const [date, setDate] = useState("");

  if (isLoading) {
    return (
      <>
        <Navbar></Navbar>
        <Line></Line>
        <Section>
          <Header>
            <Title>Wynagrodzenia pracownicze</Title>
            <Desc>Podsumowanie wynagrodzeń pracowników</Desc>
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

        <PayoutsAndMachineSection>
          <PayoutsSection>
            <PanelSectionHeader>
              <PanelSectionTitle
                title="Wynagrodzenie w skali miesiąca"
                description="Podsumowanie ostatnich wynagrodzeń"
              ></PanelSectionTitle>
            </PanelSectionHeader>
            <PanelSectionDescription>
              <PanelSectionDescriptionHeader>
                <PanelSectionData>ID pracownika</PanelSectionData>
                <PanelSectionData>Imię i nazwisko</PanelSectionData>
                <PanelSectionData>Rok / miesiąc</PanelSectionData>
                <PanelSectionData>Wynagrodzenie</PanelSectionData>
              </PanelSectionDescriptionHeader>

              <PanelSectionRow>
                <PanelSectionData>Loading...</PanelSectionData>
                <PanelSectionData>Loading...</PanelSectionData>
                <PanelSectionData>Loading...</PanelSectionData>
                <PanelSectionData>Loading...</PanelSectionData>
              </PanelSectionRow>
            </PanelSectionDescription>
          </PayoutsSection>
        </PayoutsAndMachineSection>
        <Footer></Footer>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Navbar></Navbar>
        <Line></Line>
        <Section>
          <Header>
            <Title>Wynagrodzenia pracownicze</Title>
            <Desc>Podsumowanie wynagrodzeń pracowników</Desc>
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

        <PayoutsAndMachineSection>
          <PayoutsSection>
            <PanelSectionHeader>
              <PanelSectionTitle
                title="Wynagrodzenie w skali miesiąca"
                description="Podsumowanie ostatnich wynagrodzeń"
              ></PanelSectionTitle>
              <PanelSectionButton>dgsdg</PanelSectionButton>
            </PanelSectionHeader>
            <PanelSectionDescription>
              <PanelSectionDescriptionHeader>
                <PanelSectionData>ID pracownika</PanelSectionData>
                <PanelSectionData>Imię i nazwisko</PanelSectionData>
                <PanelSectionData>Rok / miesiąc</PanelSectionData>
                <PanelSectionData>Wynagrodzenie</PanelSectionData>
              </PanelSectionDescriptionHeader>

              <PanelSectionRow>
                <PanelSectionData>Error...</PanelSectionData>
                <PanelSectionData>Error...</PanelSectionData>
                <PanelSectionData>Error...</PanelSectionData>
                <PanelSectionData>Error...</PanelSectionData>
              </PanelSectionRow>
            </PanelSectionDescription>
          </PayoutsSection>
        </PayoutsAndMachineSection>
        <Footer></Footer>
      </>
    );
  }

  const filteredDate = data.filter((item) => item.date.includes(date));
  return (
    <>
      <Navbar></Navbar>
      <Line></Line>
      <Section>
        <Header>
          <Title>Wynagrodzenia pracownicze</Title>
          <Desc>Podsumowanie wynagrodzeń pracowników</Desc>
        </Header>
        <NewSection>
          <AddSection>
            <StyledLink to="/admin-panel">
              <AddButton>-</AddButton>
            </StyledLink>
            <AddTitle>Powrót</AddTitle>
          </AddSection>
        </NewSection>
      </Section>

      <PayoutsAndMachineSection>
        <PayoutsSection>
          <PanelSectionHeader>
            <PanelSectionTitle
              title="Wynagrodzenia w skali miesiąca"
              description="Podsumowanie wszytkich wynagrodzeń"
            ></PanelSectionTitle>
            <PanelSectionButton>
              <Input
                type="month"
                onChange={(e) => setDate(e.target.value)}
              ></Input>
            </PanelSectionButton>
          </PanelSectionHeader>
          <PanelSectionDescription>
            <PanelSectionDescriptionHeader>
              <PanelSectionData>ID pracownika</PanelSectionData>
              <PanelSectionData>Imię i nazwisko</PanelSectionData>
              <PanelSectionData>Rok / miesiąc</PanelSectionData>
              <PanelSectionData>Wynagrodzenie</PanelSectionData>
            </PanelSectionDescriptionHeader>
            {date === ""
              ? data.map((worker) => {
                  return (
                    <PanelSectionRow>
                      <PanelSectionData>{worker.worker_id}</PanelSectionData>
                      <PanelSectionData>
                        {worker.name} {worker.surname}
                      </PanelSectionData>
                      <PanelSectionData>
                        {String(worker.date).slice(0, 7)}
                      </PanelSectionData>
                      <PanelSectionData>
                        {Number(worker.salary).toFixed(2)} PLN
                      </PanelSectionData>
                    </PanelSectionRow>
                  );
                })
              : filteredDate.map((worker) => {
                  return (
                    <PanelSectionRow
                      key={`${worker.worker_id}${worker.name}${worker.surname}`}
                    >
                      <PanelSectionData>{worker.worker_id}</PanelSectionData>
                      <PanelSectionData>
                        {worker.name} {worker.surname}
                      </PanelSectionData>
                      <PanelSectionData>
                        {String(worker.date).slice(0, 7)}
                      </PanelSectionData>
                      <PanelSectionData>
                        {Number(worker.salary).toFixed(2)} PLN
                      </PanelSectionData>
                    </PanelSectionRow>
                  );
                })}
          </PanelSectionDescription>
        </PayoutsSection>
      </PayoutsAndMachineSection>
      <Footer></Footer>
    </>
  );
};

export default WorkersMonthlySalary;
