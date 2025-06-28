import aboutusimage from '../../assets/images/about.jpg'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import "./index.css"
import WhyChooseUs from '../WhyChooseUs';
import Clients from '../Clients';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div id="about" className="about-us-container ">
            <div className='about-banner'>
                <h1 className='about-head'>A B O U T &nbsp; U S</h1>
            </div>
            <div className='d-flex m-4'>
                <div className='m-2 text-start' >
                    {/* <h4 className='about-us-text' >About Us</h4> */}
                    <h3 >The Best IT Solution With 3 Years of Experience</h3>
                    <p >Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.
                        Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                        Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <p >Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.
                        Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                        Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <p >Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.
                        Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                        Sanctus clita duo justo et tempor eirmod magna dolore erat amet Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.
                        Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                        Sanctus clita duo justo et tempor eirmod magna dolore erat ametTempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.
                        Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
                        Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                </div>
                <div className='mobile-about-us-image'>
                    <img src={aboutusimage} className="about-us-image" alt="abt-img" />
                </div>
            </div>
            <WhyChooseUs />
            <Clients />
        </div>
    )
}

export default AboutUs