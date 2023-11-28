import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
  padding-top: 100px;
`;
const Content = styled.p`
  font-size: 13px;
  color: #8b8b8b;
  font-weight: 200;
  line-height: 1.7;
  word-spacing: 1px;
  max-width: 1700px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  display: flex;
  text-align: justify;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </Content>
      </Container>
    </>
  );
};

export default Footer;
