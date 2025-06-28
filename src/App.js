import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
// import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        {/* <Route path="/whychooseus" element={<WhyChooseUs />} /> */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
