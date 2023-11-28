import styled from "styled-components";
const Container = styled.section`
  flex: 1;
`;
const Title = styled.p`
  font-size: 22px;
  margin-bottom: 0px;
`;
const Desc = styled.p`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 200;
  word-spacing: 1px;
  color: #585858;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

const PanelSectionTitle = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </Container>
  );
};

export default PanelSectionTitle;
