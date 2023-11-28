import styled from "styled-components";
import PanelSectionTitle from "../components/PanelSectionTitle";
import { useGetLatestMonthlySalaryQuery } from "../redux/slices/workApiSlice";
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
    width: 120%;
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
    width: 120%;
  }
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

const PayoutsComponent = () => {
  const { data, isLoading, isError } = useGetLatestMonthlySalaryQuery();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <PayoutsSection>
        <PanelSectionHeader>
          <PanelSectionTitle
            title="Wynagrodzenie w skali miesiąca"
            description="Podsumowanie ostatnich wynagrodzeń"
          ></PanelSectionTitle>
          <PanelSectionButton>
            <AddButtonSection>+</AddButtonSection>
            <ButtonDescription>Pokaż wszystko</ButtonDescription>
          </PanelSectionButton>
        </PanelSectionHeader>
        <PanelSectionDescription>
          <PanelSectionDescriptionHeader>
            <PanelSectionData>Miesiąc / rok</PanelSectionData>
            <PanelSectionData>Wynagrodzenie</PanelSectionData>
            <PanelSectionData>Więcej</PanelSectionData>
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
          <PanelSectionTitle
            title="Wynagrodzenie w skali miesiąca"
            description="Podsumowanie ostatnich wynagrodzeń"
          ></PanelSectionTitle>
          <PanelSectionButton>
            <AddButtonSection>+</AddButtonSection>
            <ButtonDescription>Pokaż wszystko</ButtonDescription>
          </PanelSectionButton>
        </PanelSectionHeader>
        <PanelSectionDescription>
          <PanelSectionDescriptionHeader>
            <PanelSectionData>Miesiąc / rok</PanelSectionData>
            <PanelSectionData>Wynagrodzenie</PanelSectionData>
            <PanelSectionData>Więcej</PanelSectionData>
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
          title="Wynagrodzenie w skali miesiąca"
          description="Podsumowanie ostatnich wynagrodzeń"
        ></PanelSectionTitle>
        <PanelSectionButton>
          <StyledLink to="/monthly-payouts" onClick={handleClick}>
            <AddButtonSection>+</AddButtonSection>
          </StyledLink>
          <ButtonDescription>Pokaż wszystko</ButtonDescription>
        </PanelSectionButton>
      </PanelSectionHeader>
      <PanelSectionDescription>
        <PanelSectionDescriptionHeader>
          <PanelSectionData>Miesiąc / rok</PanelSectionData>
          <PanelSectionData>Wynagrodzenie</PanelSectionData>
          <PanelSectionData>Czas pracy</PanelSectionData>
        </PanelSectionDescriptionHeader>
        {data.map((payment) => {
          return (
            <PanelSectionRow key={payment.date.slice(0, 7)}>
              <PanelSectionData>{payment.date.slice(0, 7)}</PanelSectionData>
              <PanelSectionData>
                {Number(payment.salary).toFixed(2)} PLN
              </PanelSectionData>
              <PanelSectionData>
                {(Number(payment.worktime) / 60).toFixed(2)} h
              </PanelSectionData>
            </PanelSectionRow>
          );
        })}
      </PanelSectionDescription>
    </PayoutsSection>
  );
};

export default PayoutsComponent;
