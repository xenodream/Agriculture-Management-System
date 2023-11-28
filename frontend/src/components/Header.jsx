import styled from "styled-components";

const HeaderSection = styled.header`
  max-width: 1700px;
  min-height: 750px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding-bottom: 50px;
  @media (max-width: 1120px) {
    flex-direction: column;
  }
`;
const TitleSection = styled.section`
  flex: 1;
  padding-right: 20px;
`;
const Title = styled.h1`
  margin-top: 150px;
  padding-left: 30px;
  font-size: 55px;
  font-weight: 300;
  line-height: 1.3;
  @media (max-width: 1120px) {
    font-size: 48px;
    margin-top: 80px;
  }
  @media (max-width: 550px) {
    font-size: 40px;
    margin-top: 80px;
  }
`;
const Span = styled.span`
  color: #a57858;
`;
const Desc = styled.p`
  margin-top: 50px;
  padding: 30px;
  font-size: 13px;
  max-width: 650px;
  font-weight: 300;
  color: #3f3f3f;
  line-height: 159%;
  @media (max-width: 550px) {
    font-size: 12px;
    margin-top: 0px;
  }
`;

const ImagesSection = styled.section`
  flex: 1;
  display: flex;

  padding-left: 20px;
  padding-right: 20px;
`;

const Image = styled.section`
  margin-top: 140px;
  flex: 1;
  max-width: 650px;
  height: 420px;
  @media (max-width: 1120px) {
    margin-top: 40px;
  }
`;

const TopImage = styled.section`
  height: 210px;
  background: url("./images/apple.jpg");
  background-size: cover;
  border-radius: 3px;
  margin: 10px 10px 0px 10px;
`;
const BottomImages = styled.section`
  height: 210px;
  display: flex;
`;
const LeftSection = styled.section`
  background-color: aliceblue;
  flex: 1;
  margin: 10px 10px 10px 10px;
  border-radius: 3px;
  background: url("./images/grape.jpg");
  background-size: cover;
`;
const RightSection = styled.section`
  background: url("./images/potatoes.jpg");
  flex: 1.8;
  margin: 10px 10px 10px 0px;
  background-size: cover;
  border-radius: 3px;
`;

const Header = () => {
  return (
    <HeaderSection>
      <TitleSection>
        <Title>
          System do zarządzania
          <br />
          <Span>
            zbiorami naturalnymi
            <br />
            owoców i warzyw
          </Span>
        </Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </Desc>
      </TitleSection>
      <ImagesSection>
        <Image>
          <TopImage></TopImage>
          <BottomImages>
            <LeftSection></LeftSection>
            <RightSection></RightSection>
          </BottomImages>
        </Image>
      </ImagesSection>
    </HeaderSection>
  );
};

export default Header;
