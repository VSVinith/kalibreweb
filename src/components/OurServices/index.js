import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faChartPie, faCode, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import "./index.css"
import { faAndroid } from '@fortawesome/free-brands-svg-icons'

const OurServices = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div id="services" className="our-services-container w-100">
            <div className='services-banner d-flex justify-content-center align-items-center'>
                <h1 className='services-head '>O U R &nbsp; S E R V I C E S</h1>
            </div>
            <div className='d-flex flex-column align-items-center mt-5'>
                <div className="services-heading">
                    {/* <h4 className="our-services-text mb-3">O U R &nbsp; S E R V I C E S</h4> */}
                    <h3>Custom IT Solutions for Your Successful Business</h3>
                </div>
                <div className="mt-4 d-flex justify-content-center mobile">
                    <div className="m-5 service-block p-5" data-aos="zoom-out" >
                        <FontAwesomeIcon icon={faShieldHalved} size='3x' style={{ color: "#214382", }} />
                        <h4 className="mb-4 mt-4">Cyber Security</h4>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    </div>
                    <div className="m-5 service-block p-5" data-aos="zoom-out" >
                        <FontAwesomeIcon icon={faChartPie} size='3x' style={{ color: "#214382", }} />
                        <h4 className="mb-4 mt-4">Data Analytics</h4>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    </div>
                    <div className="m-5 service-block p-5" data-aos="zoom-out" >
                        <FontAwesomeIcon icon={faCode} size='3x' style={{ color: "#214382", }} />
                        <h4 className="mb-4 mt-4">Web Development</h4>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center mobile" >
                    <div className="m-5 service-block p-5" data-aos="zoom-out" >
                        <FontAwesomeIcon icon={faAndroid} size='3x' style={{ color: "#214382", }} />
                        <h4 className="mb-4 mt-4">Apps Development</h4>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    </div>
                    <div className="m-5 service-block p-5" data-aos="zoom-out">
                        <FontAwesomeIcon icon={faMagnifyingGlass} size='3x' style={{ color: "#214382", }} />
                        <h4 className="mb-4 mt-4">SEO Optimization</h4>
                        <p>Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices