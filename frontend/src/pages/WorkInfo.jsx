import styled from "styled-components";
import Navbar from "../components/Navbar";
import Line from "../components/Line";
import PanelSectionTitle from "../components/PanelSectionTitle";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useGetAllWorkersWorkQuery } from "../redux/slices/adminApiSlice";
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
const LatestCollections = styled.section`
  max-width: 1700px;
  width: 95%;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
  min-height: 500px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 7px;
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
  min-height: 75px;
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

const StyledLink = styled(Link)``;

const WorkInfo = () => {
  const { data, isLoading, isError } = useGetAllWorkersWorkQuery();

  if (isLoading) {
    return (
      <>
        <Navbar></Navbar>
        <Line></Line>
        <Section>
          <Header>
            <Title>Praca</Title>
            <Desc>Podsumowanie pracy</Desc>
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

        <LatestCollections>
          <PanelSectionHeader>
            <PanelSectionTitle
              title="Praca"
              description="Podsumowanie zarejestrowanych zbiorów."
            ></PanelSectionTitle>
          </PanelSectionHeader>
          <PanelSectionDescription>
            <PanelSectionDescriptionHeader>
              <PanelSectionData>ID zbioru</PanelSectionData>
              <PanelSectionData>Imię i nazwisko</PanelSectionData>
              <PanelSectionData>Rodzaj pracy</PanelSectionData>
              <PanelSectionData>Wielkość zbioru</PanelSectionData>
              <PanelSectionData>Data</PanelSectionData>
              <PanelSectionData>Opis</PanelSectionData>
            </PanelSectionDescriptionHeader>

            <PanelSectionRow>
              <PanelSectionData>Loading...</PanelSectionData>
              <PanelSectionData>Loading...</PanelSectionData>
              <PanelSectionData>Loading...</PanelSectionData>
              <PanelSectionData>Loading...</PanelSectionData>
              <PanelSectionData>Loading...</PanelSectionData>
            </PanelSectionRow>
          </PanelSectionDescription>
        </LatestCollections>

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
            <Title>Praca</Title>
            <Desc>Podsumowanie pracy</Desc>
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

        <LatestCollections>
          <PanelSectionHeader>
            <PanelSectionTitle
              title="Praca"
              description="Podsumowanie zarejestrowanych zbiorów."
            ></PanelSectionTitle>
          </PanelSectionHeader>
          <PanelSectionDescription>
            <PanelSectionDescriptionHeader>
              <PanelSectionData>ID zbioru</PanelSectionData>
              <PanelSectionData>Imię i nazwisko</PanelSectionData>
              <PanelSectionData>Rodzaj pracy</PanelSectionData>
              <PanelSectionData>Wielkość zbioru</PanelSectionData>
              <PanelSectionData>Data</PanelSectionData>
              <PanelSectionData>Opis</PanelSectionData>
            </PanelSectionDescriptionHeader>

            <PanelSectionRow>
              <PanelSectionData>Error...</PanelSectionData>
              <PanelSectionData>Error...</PanelSectionData>
              <PanelSectionData>Error...</PanelSectionData>
              <PanelSectionData>Error...</PanelSectionData>
              <PanelSectionData>Error...</PanelSectionData>
            </PanelSectionRow>
          </PanelSectionDescription>
        </LatestCollections>

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
          <Title>Praca</Title>
          <Desc>Podsumowanie pracy</Desc>
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

      <LatestCollections>
        <PanelSectionHeader>
          <PanelSectionTitle
            title="Praca"
            description="Podsumowanie zarejestrowanych zbiorów."
          ></PanelSectionTitle>
        </PanelSectionHeader>
        <PanelSectionDescription>
          <PanelSectionDescriptionHeader>
            <PanelSectionData>ID zbioru</PanelSectionData>
            <PanelSectionData>Imię i nazwisko</PanelSectionData>
            <PanelSectionData>Rodzaj pracy</PanelSectionData>
            <PanelSectionData>Wielkość zbioru</PanelSectionData>
            <PanelSectionData>Data</PanelSectionData>
            <PanelSectionData>Opis</PanelSectionData>
          </PanelSectionDescriptionHeader>
          {formattedData.map((data) => {
            return (
              <PanelSectionRow key={data.id}>
                <PanelSectionData>{data.id}</PanelSectionData>
                <PanelSectionData>
                  {data.name} {data.surname}
                </PanelSectionData>
                <PanelSectionData>{data.type_of_work}</PanelSectionData>
                <PanelSectionData>
                  {Number(data.yields_weight).toFixed(2)} kg
                </PanelSectionData>
                <PanelSectionData>{data.date}</PanelSectionData>
                <PanelSectionData>{data.work_description}</PanelSectionData>
              </PanelSectionRow>
            );
          })}
        </PanelSectionDescription>
      </LatestCollections>

      <Footer></Footer>
    </>
  );
};

export default WorkInfo;
