import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUserLogoutMutation } from "../redux/slices/usersApiSlice";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.nav`
  max-width: 1700px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  box-sizing: border-box;
`;
const LogoSection = styled.section`
  flex: 0.4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: 300;
  padding-left: 30px;
  font-size: 25px;
  color: #a57858;

  @media (max-width: 1120px) {
    font-size: 18px;
  }
`;
const LinksSection = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const StyledLink = styled(Link)`
  padding-right: 50px;
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(87, 87, 87);
  font-size: 13px;
  letter-spacing: 0.5px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const BurgerSection = styled.section`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const TopLine = styled.section`
  width: 15px;
  height: 2px;
  background-color: rgb(44, 44, 44);
  margin-bottom: 3px;
  border-radius: 5px;
  background-color: ${({ open }) => (open ? "#A99281" : "black")};
  transform: ${({ open }) => (open ? "translateY(5px)" : "translateY(0px)")};
  transition: 0.3s;
  transition-delay: 0.3s;
`;
const BottomLine = styled.section`
  width: 15px;
  height: 2px;
  background-color: rgb(44, 44, 44);
  margin-bottom: 3px;
  border-radius: 5px;
  background-color: ${({ open }) => (open ? "#A99281" : "black")};
  transform: ${({ open }) => (open ? "translateY(-5px)" : "translateY(0px)")};
  transition: 0.3s;
  transition-delay: 0.3s;
`;
const ShortLine = styled.section`
  height: 2px;
  background-color: rgb(44, 44, 44);
  margin-bottom: 3px;
  border-radius: 5px;
  width: 10px;
  transition: 0.5s;
  opacity: ${({ open }) => (open ? "0%" : "100%")};
  transition-delay: ${({ open }) => (open ? "0s" : "1s")};
`;
//mobile navigation

const MobileNav = styled.section`
  width: 100%;
  height: 0px;
  transition: 0.3s;
  overflow: hidden;
  @media (max-width: 670px) {
    display: block;
    min-height: ${({ open }) => (open ? "220px" : "0px")};
  }
`;

const MobileLink = styled(Link)`
  height: 50px;
  padding-left: 30px;
  color: rgb(87, 87, 87);
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const [logoutUser] = useUserLogoutMutation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleLogout = async () => {
    try {
      let response = await logoutUser({});
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const { loggedUser } = useSelector((store) => store.user);

  const handleNav = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <Container>
        <LogoSection>
          <Logo>Farmersoft</Logo>
        </LogoSection>
        <LinksSection>
          <StyledLink to="/">Home</StyledLink>
          {loggedUser.id === 15 ? (
            <>
              <StyledLink to="/admin-panel">ADMIN PANEL</StyledLink>
              <StyledLink onClick={handleLogout}>Logout</StyledLink>
            </>
          ) : loggedUser ? (
            <>
              <StyledLink to="/worker">
                {`${loggedUser.name} ${loggedUser.surname}`}
              </StyledLink>
              <StyledLink onClick={handleLogout}>Logout</StyledLink>
            </>
          ) : (
            <StyledLink to="/login">Login</StyledLink>
          )}

          <BurgerSection onClick={handleNav}>
            <TopLine open={open}></TopLine>
            <ShortLine open={open}></ShortLine>
            <BottomLine open={open}></BottomLine>
          </BurgerSection>
        </LinksSection>
      </Container>
      <MobileNav open={open}>
        {loggedUser.id === 15 ? (
          <>
            <MobileLink to="/" onClick={handleNav}>
              Home
            </MobileLink>

            <MobileLink to="admin-panel">Admin Panel</MobileLink>
            <MobileLink onClick={handleLogout}>Logout</MobileLink>
          </>
        ) : loggedUser ? (
          <>
            <MobileLink to="/" onClick={handleNav}>
              Home
            </MobileLink>

            <MobileLink to="/worker">{`${loggedUser.name} ${loggedUser.surname}`}</MobileLink>
            <MobileLink onClick={handleLogout}>Logout</MobileLink>
          </>
        ) : (
          <>
            <MobileLink to="/">Home</MobileLink>
            <MobileLink to="/login">Login</MobileLink>
          </>
        )}
      </MobileNav>
    </>
  );
};

export default Navbar;
