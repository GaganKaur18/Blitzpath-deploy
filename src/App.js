import AboutUs from "./components/AboutUs/AboutUs";
import ImageSlider from "./components/image_crousel/Image_crousel";
import LastPage from "./components/LastPage/LastPage";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/services/Services";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import linkdin from "./images/linkdin.png";
import "./App.css";
import Footer from "./components/footer/Footer";
import useWindowDimensions from "./CustomHooks/useWindowDimensions";
function App() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App">
      <Navbar />
      <ImageSlider />
      <Services />
      <div>
        <ul className="social">
          {/* <li><a href=""><img src={facebook} alt="" /></a></li> */}
          <li>
            <a href="https://www.instagram.com/blitzpath.innovations/?utm_medium=copy_link">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/blitzpath-innovations/">
              <img src={linkdin} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <AboutUs />
      <LastPage width={width} />
      <Footer />
    </div>
  );
}

export default App;
