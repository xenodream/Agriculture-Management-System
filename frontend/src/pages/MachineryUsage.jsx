import styled from "styled-components";
import Navbar from "../components/Navbar";
import Line from "../components/Line";
import PanelSectionTitle from "../components/PanelSectionTitle";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useGetMachineryUsageQuery } from "../redux/slices/workApiSlice";
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

const PanelSectionHeader = styled.section`
  height: 100px;
  /* background-color: #cfcfcf; */
  padding-top: 10px;
  padding-left: 40px;
  display: flex;
`;

const PanelSectionDescription = styled.section`
  width: 100%;
  min-height: 300px;
  @media (max-width: 700px) {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
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
  @media (max-width: 700px) {
    width: 130%;
  }
`;
const PanelSectionRow = styled.section`
  margin-left: 40px;
  margin-right: 40px;
  height: 75px;
  margin-top: 2px;
  box-sizing: border-box;
  display: flex;
  border-top: 1px solid #ebebeb;
  @media (max-width: 700px) {
    width: 130%;
  }
`;
const PanelSectionData = styled.section`
  flex: 1;
  margin: 10px;
  display: flex;
  align-items: center;
  font-size: 13px;
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

const MachineSection = styled.section`
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  background-color: #ffffff;
  border-radius: 7px;
  margin-left: 15px;
`;
const StyledLink = styled(Link)``;

const MachineryUsage = () => {
  const { loggedUser } = useSelector((store) => store.user);
  const { data, isLoading, isError } = useGetMachineryUsageQuery();

  if (isLoading) {
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
              <StyledLink to="/worker">
                <AddButton>-</AddButton>
              </StyledLink>
              <AddTitle>Powrót</AddTitle>
            </AddSection>
          </NewSection>
        </Section>

        <PayoutsAndMachineSection>
          <MachineSection>
            <PanelSectionHeader>
              <PanelSectionTitle
                title="Wykorzystanie maszyn rolniczych"
                description="Wykorzystanie maszyn podczas każdego dnia pracy"
              ></PanelSectionTitle>
            </PanelSectionHeader>
            <PanelSectionDescription>
              <PanelSectionDescriptionHeader>
                <PanelSectionData>Rok / miesiąc</PanelSectionData>
                <PanelSectionData>Maszyna</PanelSectionData>
                <PanelSectionData>Czas użytkowania</PanelSectionData>
              </PanelSectionDescriptionHeader>
              <PanelSectionRow>
                <PanelSectionData>Loading...</PanelSectionData>
                <PanelSectionData>Loading...</PanelSectionData>
                <PanelSectionData>Loading...</PanelSectionData>
              </PanelSectionRow>
            </PanelSectionDescription>
          </MachineSection>
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
            <Title>Witaj {`${loggedUser.name} ${loggedUser.surname}`}</Title>
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

        <PayoutsAndMachineSection>
          <MachineSection>
            <PanelSectionHeader>
              <PanelSectionTitle
                title="Wykorzystanie maszyn rolniczych"
                description="Wykorzystanie maszyn podczas każdego dnia pracy"
              ></PanelSectionTitle>
            </PanelSectionHeader>
            <PanelSectionDescription>
              <PanelSectionDescriptionHeader>
                <PanelSectionData>Rok / miesiąc</PanelSectionData>
                <PanelSectionData>Maszyna</PanelSectionData>
                <PanelSectionData>Czas użytkowania</PanelSectionData>
              </PanelSectionDescriptionHeader>
              <PanelSectionRow>
                <PanelSectionData>Loading...</PanelSectionData>
                <PanelSectionData>Loading...</PanelSectionData>
                <PanelSectionData>Loading...</PanelSectionData>
              </PanelSectionRow>
            </PanelSectionDescription>
          </MachineSection>
        </PayoutsAndMachineSection>
        <Footer></Footer>
      </>
    );
  }

  const formattedData = data.map((obj) => {
    const { date, ...rest } = obj;
    const convertedDate = new Date(date);
    convertedDate.setDate(convertedDate.getDate() + 1);
    let formattedDate = convertedDate.toISOString().split("T")[0];
    return {
      date: formattedDate,
      ...rest,
    };
  });
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
            <StyledLink to="/worker">
              <AddButton>-</AddButton>
            </StyledLink>
            <AddTitle>Powrót</AddTitle>
          </AddSection>
        </NewSection>
      </Section>

      <PayoutsAndMachineSection>
        <MachineSection>
          <PanelSectionHeader>
            <PanelSectionTitle
              title="Wykorzystanie maszyn rolniczych"
              description="Wykorzystanie maszyn podczas każdego dnia pracy"
            ></PanelSectionTitle>
          </PanelSectionHeader>
          <PanelSectionDescription>
            <PanelSectionDescriptionHeader>
              <PanelSectionData>Rok / miesiąc</PanelSectionData>
              <PanelSectionData>Maszyna</PanelSectionData>
              <PanelSectionData>Czas użytkowania</PanelSectionData>
            </PanelSectionDescriptionHeader>
            {formattedData.map((machineUsage) => {
              return (
                <PanelSectionRow key={machineUsage.id}>
                  <PanelSectionData>
                    {machineUsage.date.slice(0, 10)}
                  </PanelSectionData>
                  <PanelSectionData>{machineUsage.machine}</PanelSectionData>
                  <PanelSectionData>
                    {(Number(machineUsage.sum) / 60).toFixed(2)} h
                  </PanelSectionData>
                </PanelSectionRow>
              );
            })}
          </PanelSectionDescription>
        </MachineSection>
      </PayoutsAndMachineSection>
      <Footer></Footer>
    </>
  );
};

export default MachineryUsage;
