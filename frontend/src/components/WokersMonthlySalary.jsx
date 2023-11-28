import styled from "styled-components";
import PanelSectionTitle from "../components/PanelSectionTitle";
import { Link } from "react-router-dom";
import { useGetWorkersSalaryQuery } from "../redux/slices/adminApiSlice";

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

const PayoutsSection = styled.section`
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  background-color: #ffffff;
  border-radius: 7px;
  margin-right: 15px;
  @media (max-width: 1000px) {
    margin-right: 0px;
  }
`;

const StyledLink = styled(Link)``;

const WorkersMonthlySalary = () => {
  const { data, isLoading, isError } = useGetWorkersSalaryQuery();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <PayoutsSection>
        <PanelSectionHeader>
          <PanelSectionTitle
            title="Wypłaty pracownicze"
            description="Podsumowanie wynagrodzeń pracowników"
          ></PanelSectionTitle>
          <PanelSectionButton>
            <AddButtonSection>+</AddButtonSection>
            <ButtonDescription>Pokaż wszystko</ButtonDescription>
          </PanelSectionButton>
        </PanelSectionHeader>
        <PanelSectionDescription>
          <PanelSectionDescriptionHeader>
            <PanelSectionData>ID pracownika</PanelSectionData>
            <PanelSectionData>Rok / miesiąc</PanelSectionData>
            <PanelSectionData>Wynagrodzenie</PanelSectionData>
          </PanelSectionDescriptionHeader>
          <PanelSectionRow>
            <PanelSectionData>Loading...</PanelSectionData>
            <PanelSectionData>Loading...</PanelSectionData>
            <PanelSectionData>
              <AddButtonSection>Loading...</AddButtonSection>
            </PanelSectionData>
          </PanelSectionRow>
        </PanelSectionDescription>
      </PayoutsSection>
    );
  }

  if (isError) {
    return (
      <PayoutsSection>
        <PanelSectionHeader>
          <PanelSectionButton>
            <AddButtonSection>+</AddButtonSection>
            <ButtonDescription>Pokaż wszystko</ButtonDescription>
          </PanelSectionButton>
        </PanelSectionHeader>
        <PanelSectionDescription>
          <PanelSectionDescriptionHeader>
            <PanelSectionData>ID pracownika</PanelSectionData>
            <PanelSectionData>Rok / miesiąc</PanelSectionData>
            <PanelSectionData>Wynagrodzenie</PanelSectionData>
          </PanelSectionDescriptionHeader>
          <PanelSectionRow>
            <PanelSectionData>Wytąpił błąd...</PanelSectionData>
            <PanelSectionData>Wystąpił błąd...</PanelSectionData>
            <PanelSectionData>
              <AddButtonSection>Wystąpił błąd...</AddButtonSection>
            </PanelSectionData>
          </PanelSectionRow>
        </PanelSectionDescription>
      </PayoutsSection>
    );
  }
  return (
    <PayoutsSection>
      <PanelSectionHeader>
        <PanelSectionTitle
          title="Wypłaty pracownicze"
          description="Podsumowanie wynagrodzeń pracowników"
        ></PanelSectionTitle>
        <PanelSectionButton>
          <StyledLink to="/workers-monthly-salary" onClick={handleClick}>
            <AddButtonSection>+</AddButtonSection>
          </StyledLink>
          <ButtonDescription>Pokaż wszystko</ButtonDescription>
        </PanelSectionButton>
      </PanelSectionHeader>
      <PanelSectionDescription>
        <PanelSectionDescriptionHeader>
          <PanelSectionData>ID pracownika</PanelSectionData>
          <PanelSectionData>Rok / miesiąc</PanelSectionData>
          <PanelSectionData>Wynagrodzenie</PanelSectionData>
        </PanelSectionDescriptionHeader>
        {data.map((worker) => {
          return (
            <PanelSectionRow key={`${worker.date}${worker.salary}`}>
              <PanelSectionData>{worker.worker_id}</PanelSectionData>
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
  );
};

export default WorkersMonthlySalary;
