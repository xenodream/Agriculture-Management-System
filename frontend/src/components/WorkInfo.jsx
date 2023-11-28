import styled from "styled-components";
import PanelSectionTitle from "./PanelSectionTitle";
import { useGetWorkersWorkQuery } from "../redux/slices/adminApiSlice";
import { Link } from "react-router-dom";

const AddButtonSection = styled.button`
  width: 30px;
  height: 30px;
  color: #a57858;
  background-color: transparent;
  border: 1px solid #a57858;
  border-radius: 4px;
  font-size: 15px;
`;

const ButtonDescription = styled.p`
  font-size: 13px;
  margin-left: 10px;
`;

const LatestCollections = styled.section`
  max-width: 1700px;
  width: 95%;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 120px;
  min-height: 500px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 7px;
`;

const PanelSectionHeader = styled.section`
  height: 100px;
  padding-top: 10px;
  padding-left: 40px;
  display: flex;
`;
const PanelSectionButton = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 140%;
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
    width: 140%;
  }
`;
const PanelSectionData = styled.section`
  flex: 1;
  margin: 10px;
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const WorkInfo = () => {
  const { data, isLoading, isError } = useGetWorkersWorkQuery();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <LatestCollections>
        <PanelSectionHeader>
          <PanelSectionTitle
            title="Ostatnie dni pracy"
            description="Podsumowanie ostatnich zarejestrowanych zbiorów."
          ></PanelSectionTitle>
          <PanelSectionButton>
            <AddButtonSection>+</AddButtonSection>
            <ButtonDescription>Pokaż wszystko</ButtonDescription>
          </PanelSectionButton>
        </PanelSectionHeader>
        <PanelSectionDescription>
          <PanelSectionDescriptionHeader>
            <PanelSectionData>ID zbioru</PanelSectionData>
            <PanelSectionData>Data</PanelSectionData>
            <PanelSectionData>Rodzaj asortymentu</PanelSectionData>
            <PanelSectionData>Zbiór w kg</PanelSectionData>
            <PanelSectionData>Wypłata PLN</PanelSectionData>
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
    );
  }
  if (isError) {
    return (
      <LatestCollections>
        <PanelSectionHeader>
          <PanelSectionTitle
            title="Ostatnie dni pracy"
            description="Podsumowanie ostatnich zarejestrowanych zbiorów."
          ></PanelSectionTitle>
          <PanelSectionButton></PanelSectionButton>
        </PanelSectionHeader>
        <PanelSectionDescription>
          <PanelSectionDescriptionHeader>
            <PanelSectionData>ID zbioru</PanelSectionData>
            <PanelSectionData>Data</PanelSectionData>
            <PanelSectionData>Rodzaj asortymentu</PanelSectionData>
            <PanelSectionData>Zbiór w kg</PanelSectionData>
            <PanelSectionData>Wypłata PLN</PanelSectionData>
          </PanelSectionDescriptionHeader>
          <PanelSectionRow>
            <PanelSectionData>Błąd...</PanelSectionData>
            <PanelSectionData>Błąd...</PanelSectionData>
            <PanelSectionData>Błąd...</PanelSectionData>
            <PanelSectionData>Błąd...</PanelSectionData>
            <PanelSectionData>Błąd...</PanelSectionData>
          </PanelSectionRow>
        </PanelSectionDescription>
      </LatestCollections>
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
    <LatestCollections>
      <PanelSectionHeader>
        <PanelSectionTitle
          title="Ostatnie dni pracy"
          description="Podsumowanie ostatnich zarejestrowanych zbiorów."
        ></PanelSectionTitle>

        <PanelSectionButton>
          <StyledLink to="/work-info" onClick={handleClick}>
            <AddButtonSection>+</AddButtonSection>
          </StyledLink>
          <ButtonDescription>Pokaż wszystko</ButtonDescription>
        </PanelSectionButton>
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
              <PanelSectionData>
                {String(data.date).slice(0, 10)}
              </PanelSectionData>
              <PanelSectionData>
                {String(data.work_description).slice(0, 15)} ...
              </PanelSectionData>
            </PanelSectionRow>
          );
        })}
      </PanelSectionDescription>
    </LatestCollections>
  );
};

export default WorkInfo;
