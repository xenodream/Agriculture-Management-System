import styled from "styled-components";
import PanelSectionTitle from "../components/PanelSectionTitle";
import { Link } from "react-router-dom";
import { useGetWorkersMachineryUsageQuery } from "../redux/slices/adminApiSlice";
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

const MachineSection = styled.section`
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  background-color: #ffffff;
  border-radius: 7px;
  margin-left: 15px;
  @media (max-width: 1000px) {
    margin-left: 0px;
    margin-top: 30px;
  }
`;
const StyledLink = styled(Link)``;

const WorkersMachineryUsage = () => {
  const { data, isLoading, isError } = useGetWorkersMachineryUsageQuery();

  if (isLoading) {
    return (
      <MachineSection>
        <PanelSectionHeader>
          <PanelSectionTitle
            title="Wykorzystane zasoby"
            description="Wykorzystanie maszyn podczas każdego dnia pracy"
          ></PanelSectionTitle>
          <PanelSectionButton>
            <StyledLink to="/workers-machinery-usage">
              <AddButtonSection>+</AddButtonSection>
            </StyledLink>
            <ButtonDescription>Pokaż wszystko</ButtonDescription>
          </PanelSectionButton>
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
    );
  }

  if (isError) {
    return (
      <MachineSection>
        <PanelSectionHeader>
          <PanelSectionTitle
            title="Wykorzystanie maszyn rolniczych"
            description="Wykorzystanie maszyn podczas każdego dnia pracy"
          ></PanelSectionTitle>
          <PanelSectionButton>
            <StyledLink to="/machinery-usage">
              <AddButtonSection>+</AddButtonSection>
            </StyledLink>
            <ButtonDescription>Pokaż wszystko</ButtonDescription>
          </PanelSectionButton>
        </PanelSectionHeader>
        <PanelSectionDescription>
          <PanelSectionDescriptionHeader>
            <PanelSectionData>Rok / miesiąc</PanelSectionData>
            <PanelSectionData>Maszyna</PanelSectionData>
            <PanelSectionData>Czas użytkowania</PanelSectionData>
          </PanelSectionDescriptionHeader>

          <PanelSectionRow>
            <PanelSectionData>Error...</PanelSectionData>
            <PanelSectionData>Error...</PanelSectionData>
            <PanelSectionData>Error...</PanelSectionData>
          </PanelSectionRow>
        </PanelSectionDescription>
      </MachineSection>
    );
  }
  return (
    <MachineSection>
      <PanelSectionHeader>
        <PanelSectionTitle
          title="Wykorzystane zasoby"
          description="Wykorzystanie zasoby firmy podczas pracy"
        ></PanelSectionTitle>
        <PanelSectionButton>
          <StyledLink to="/workers-machinery-usage">
            <AddButtonSection>+</AddButtonSection>
          </StyledLink>
          <ButtonDescription>Pokaż wszystko</ButtonDescription>
        </PanelSectionButton>
      </PanelSectionHeader>
      <PanelSectionDescription>
        <PanelSectionDescriptionHeader>
          <PanelSectionData>Rok / miesiąc</PanelSectionData>
          <PanelSectionData>Zasób</PanelSectionData>
          <PanelSectionData>Czas pracy</PanelSectionData>
        </PanelSectionDescriptionHeader>
        {data.map((machineUsage) => {
          return (
            <PanelSectionRow key={machineUsage.worker_id}>
              <PanelSectionData>
                {machineUsage.date.slice(0, 7)}
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
  );
};

export default WorkersMachineryUsage;
