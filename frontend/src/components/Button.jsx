import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #a99281;
  width: 134px;
  height: 58px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: 10px;
`;

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.title}</StyledButton>;
};

export default Button;
