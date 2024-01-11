import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ScrollTop from "./components/ScrollTop";
import Skills from "./components/Skills";


const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
      <ScrollTop/>
    </>
  );
};

export default App;
