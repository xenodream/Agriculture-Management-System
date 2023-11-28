import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";

const Wrapper = styled.section`
  width: 100%;
  min-height: 300px;
  background-color: #f6f6f6;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 150px;
`;
const Container = styled.section`
  max-width: 1700px;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
`;

const FeaturesContainer = styled.section`
  max-width: 1400px;
  min-height: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1120px) {
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const Feature = styled.section`
  flex: 1;
  border: 1px solid #cebfb5;
  border-radius: 4px;
  margin: 10px;
  max-width: 429px;
  min-height: 370px;
  @media (max-width: 1120px) {
    max-width: 729px;
  }
`;
const SpecialFeature = styled.section`
  flex: 1;
  border: none;
  border-radius: 4px;
  margin: 10px;
  max-width: 429px;
  min-height: 400px;
  background-color: #a99281;
  color: white !important;
  @media (max-width: 1120px) {
    max-width: 729px;
  }
`;
const FeatureTitle = styled.p`
  padding-top: 30px;
  height: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 27px;
  text-align: center;
  font-weight: 200;
  line-height: 1.5;
`;
const FeatureDescription = styled.p`
  margin-top: 50px;
  font-size: 13px;
  line-height: 1.6;
  text-align: justify;
  color: #6d6d6d;
  padding: 0px 47px 0px 47px;
  font-weight: 300;
  @media (max-width: 1120px) {
    font-size: 12px;
  }
`;

const Features = () => {
  return (
    <Wrapper>
      <Container>
        <ComponentTitle
          title="Poznaj możliwości oprogramowania"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
        ></ComponentTitle>
        <FeaturesContainer>
          <Feature>
            <FeatureTitle>
              Zarządzanie
              <br />
              pracownikami
            </FeatureTitle>
            <FeatureDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod.
            </FeatureDescription>
          </Feature>
          <SpecialFeature>
            <FeatureTitle>
              Monitorowanie
              <br />
              zbiorów
            </FeatureTitle>
            <FeatureDescription style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod.
            </FeatureDescription>
          </SpecialFeature>
          <Feature>
            <FeatureTitle>
              Intuicyjna
              <br />
              obsługa
            </FeatureTitle>
            <FeatureDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod.
            </FeatureDescription>
          </Feature>
        </FeaturesContainer>
      </Container>
    </Wrapper>
  );
};

export default Features;
