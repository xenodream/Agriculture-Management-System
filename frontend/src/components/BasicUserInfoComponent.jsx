import styled from "styled-components";
import PanelSectionTitle from "./PanelSectionTitle";
import { useGetBasicUserInfoQuery } from "../redux/slices/adminApiSlice";
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
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const BasicUserInfoComponent = () => {
  const { data, isLoading, isError } = useGetBasicUserInfoQuery();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <LatestCollections>
        <PanelSectionHeader>
          <PanelSectionTitle
            title="Pracownicy"
            description="Podsumowanie pracowników i zarobków"
          ></PanelSectionTitle>
          <PanelSectionButton>
            <AddButtonSection>+</AddButtonSection>
            <ButtonDescription>Pokaż wszystko</ButtonDescription>
          </PanelSectionButton>
        </PanelSectionHeader>
        <PanelSectionDescription>
          <PanelSectionDescriptionHeader>
            <PanelSectionData>ID pracownika</PanelSectionData>
            <PanelSectionData>Imię</PanelSectionData>
            <PanelSectionData>Nazwisko</PanelSectionData>
            <PanelSectionData>Wypłacone środki</PanelSectionData>
            <PanelSectionData>Edycja</PanelSectionData>
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
            title="Pracownicy"
            description="Podsumowanie pracowników i zarobków"
          ></PanelSectionTitle>
          <PanelSectionButton></PanelSectionButton>
        </PanelSectionHeader>
        <PanelSectionDescription>
          <PanelSectionDescriptionHeader>
            <PanelSectionData>ID pracownika</PanelSectionData>
            <PanelSectionData>Imię</PanelSectionData>
            <PanelSectionData>Nazwisko</PanelSectionData>
            <PanelSectionData>Wypłacone środki</PanelSectionData>
            <PanelSectionData>Edycja</PanelSectionData>
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

  return (
    <LatestCollections>
      <PanelSectionHeader>
        <PanelSectionTitle
          title="Pracownicy"
          description="Podsumowanie pracowników i zarobków"
        ></PanelSectionTitle>

        <PanelSectionButton>
          <StyledLink to="/basic-user-info" onClick={handleClick}>
            <AddButtonSection>+</AddButtonSection>
          </StyledLink>
          <ButtonDescription>Pokaż wszystko</ButtonDescription>
        </PanelSectionButton>
      </PanelSectionHeader>
      <PanelSectionDescription>
        <PanelSectionDescriptionHeader>
          <PanelSectionData>ID pracownika</PanelSectionData>
          <PanelSectionData>Imię</PanelSectionData>
          <PanelSectionData>Nazwisko</PanelSectionData>
          <PanelSectionData>Wypłacone środki</PanelSectionData>
          <PanelSectionData>Edycja</PanelSectionData>
        </PanelSectionDescriptionHeader>
        {data.map((worker) => {
          return (
            <PanelSectionRow key={worker.worker_id}>
              <PanelSectionData>{worker.worker_id}</PanelSectionData>
              <PanelSectionData>{worker.name}</PanelSectionData>
              <PanelSectionData>{worker.surname}</PanelSectionData>
              <PanelSectionData>
                {Number(worker.sum).toFixed(2)} PLN
              </PanelSectionData>
              <PanelSectionData>
                <StyledLink to={`/worker/${worker.worker_id}`}>
                  Edytuj
                </StyledLink>
              </PanelSectionData>
            </PanelSectionRow>
          );
        })}
      </PanelSectionDescription>
    </LatestCollections>
  );
};

export default BasicUserInfoComponent;
