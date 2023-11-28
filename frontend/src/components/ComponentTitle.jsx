import styled from "styled-components";

const Title = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 40px;
  font-weight: 200;
  line-height: 2;
  @media (max-width: 1120px) {
    font-size: 35px;
  }
  @media (max-width: 550px) {
    font-size: 35px;
    line-height: 1.3;
  }
`;
const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  word-spacing: 1px;

  @media (max-width: 550px) {
    font-size: 12px;
    margin-top: 50px;
  }
`;

const ComponentTitle = ({ title, description }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
};

export default ComponentTitle;
