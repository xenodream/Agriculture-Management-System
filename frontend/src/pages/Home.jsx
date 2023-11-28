import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Line from "../components/Line";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Line></Line>
      <Header></Header>
      <Features></Features>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </>
  );
};

export default Home;
