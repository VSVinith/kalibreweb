import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faCubes, faPhoneAlt, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import whychhoseimage from '../../assets/images/feature.jpg'
import AOS from 'aos';
import { useEffect } from 'react';
import solutionImage1 from '../../assets/images/team-1.jpg'
import solutionImage2 from '../../assets/images/team-2.jpg'
import solutionImage3 from '../../assets/images/team-3.jpg'
import solutionImage4 from '../../assets/images/team-1.jpg'
import 'aos/dist/aos.css'
import "./index.css"

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <>
            <div className="web-why-choose-us">
                <div className="why-choose-us-container w-100 d-flex flex-column align-items-center">
                    <div className="w-25">
                        {/* <h4 className="why-choose-us-text ">Why Choose Us</h4> */}
                        <h3 className="text-center">We Are Here to Grow Your Business Exponentially</h3>
                    </div>
                    <div className="d-flex justify-content-center text-center">
                        <div className="d-flex flex-column justify-content-space-between block-1" >
                            <div className="mb-5" data-aos="zoom-out-right">
                                <FontAwesomeIcon icon={faCubes} size='3x' style={{ color: "#202442", }} />
                                <h3 className='mt-3 mb-3'>Best In Industry</h3>
                                <h6 className='mt-3'>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</h6>
                            </div>
                            <div data-aos="zoom-out-right">
                                <FontAwesomeIcon icon={faAward} size='3x' style={{ color: "#202442", }} />
                                <h3 className='mt-3 mb-3'>Award Winning</h3>
                                <h6 className='mt-3'>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</h6>
                            </div>
                        </div>
                        <div className=" block-1">
                            <img src={whychhoseimage} className='why-choose-image' alt="whyimage" data-aos="zoom-in" />
                        </div>
                        <div className="d-flex flex-column justify-content-space-between block-1">
                            <div className="mb-5" data-aos="zoom-out-left">
                                <FontAwesomeIcon icon={faUsersCog} size='3x' style={{ color: "#202442", }} />
                                <h3 className='mt-3 mb-3'>Professional Staff</h3>
                                <h6 className='mt-3'>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</h6>
                            </div>
                            <div data-aos="zoom-out-left">
                                <FontAwesomeIcon icon={faPhoneAlt} size='3x' style={{ color: "#202442", }} />
                                <h3 className='mt-3 mb-3'>24/7</h3>
                                <h6 className='mt-3'>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex m-5 p-5 solutions-container'>
                    <div className='w-50 m-5'>
                        <h5 className='mb-4 text-decoration-underline'>Tech Kalibre - Welcome To IT Solutions</h5>
                        <h1>Let Us Be Your Next </h1>
                        <h1>Preferred IT Partner</h1>
                        <p>Dolor sit amet, consectetur adipisicing elitm sed do eiusmod temp
                            sed incididunt ut labore etsu dolore magna aliquatenim minim veniam
                            quis ipsum nostrud exer citation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolorn reprehenderit voluptate velit esse</p>
                        <ul className='solutions-list'>
                            <li>We are committed to providing quality IT Services</li>
                            <li>Really know the true needs and expectations of customers</li>
                            <li>Processes of achieving the excellence and continue improvements</li>
                            <li>Talented & experienced management solutions for IT</li>
                            <li>Our benefits are endless for local IT Companies & Startups</li>
                        </ul>
                    </div>


                    <div className='d-flex flex-column images-container'>
                        <div className='d-flex'>
                            <img className='solution-image' style={{ borderRadius: "0 0 30% 0" }} src={solutionImage1} />
                            <img className='solution-image' style={{ borderRadius: "0 0 0 30%" }} src={solutionImage2} />
                        </div>
                        <div className='d-flex'>
                            <img className='solution-image' style={{ borderRadius: "0 30% 0 0" }} src={solutionImage3} />
                            <img className='solution-image' style={{ borderRadius: "30% 0 0 0" }} src={solutionImage4} />
                        </div>
                    </div>

                </div>
            </div>

            <div className="mobile-why-choose-us">
                <div className="why-choose-us-container w-100 d-flex flex-column align-items-center">
                    <div className="w-75">
                        {/* <h4 className="why-choose-us-text ">Why Choose Us</h4> */}
                        <h3 className="">We Are Here to Grow Your Business Exponentially</h3>
                    </div>
                    <div className="d-flex justify-content-center text-center">
                        <div className="d-flex flex-column justify-content-space-between block-1" >
                            <div className="mb-5 mobile-block-height" data-aos="zoom-out-right">
                                <FontAwesomeIcon icon={faCubes} size='3x' style={{ color: "#202442", }} />
                                <h3 className='mt-3 mb-3'>Best In Industry</h3>
                                <h6 className='mt-3'>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</h6>
                            </div>
                            <div className="mobile-block-height" data-aos="zoom-out-right">
                                <FontAwesomeIcon icon={faAward} size='3x' style={{ color: "#202442", }} />
                                <h3 className='mt-3 mb-3'>Award Winning</h3>
                                <h6 className='mt-3'>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</h6>
                            </div>
                        </div>
                        {/* <div className=" block-1">
                            <img src={whychhoseimage} className='why-choose-image' alt="whyimage" data-aos="zoom-in" />
                        </div> */}
                        <div className="d-flex flex-column justify-content-space-between block-1">
                            <div className="mb-5 mobile-block-height" data-aos="zoom-out-left">
                                <FontAwesomeIcon icon={faUsersCog} size='3x' style={{ color: "#202442", }} />
                                <h3 className='mt-3 mb-3'>Professional Staff</h3>
                                <h6 className='mt-3'>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</h6>
                            </div>
                            <div className="mobile-block-height" data-aos="zoom-out-left">
                                <FontAwesomeIcon icon={faPhoneAlt} size='3x' style={{ color: "#202442", }} />
                                <h3 className='mt-3 mb-3'>24/7</h3>
                                <h6 className='mt-3'>Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex m-2 p-2 solutions-container'>
                    <div className='m-2'>
                        <h5 className='mb-4 text-decoration-underline'>Tech Kalibre - Welcome To IT Solutions</h5>
                        <h1>Let Us Be Your Next </h1>
                        <h1>Preferred IT Partner</h1>
                        <p>Dolor sit amet, consectetur adipisicing elitm sed do eiusmod temp
                            sed incididunt ut labore etsu dolore magna aliquatenim minim veniam
                            quis ipsum nostrud exer citation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolorn reprehenderit voluptate velit esse</p>

                          <div className='d-flex flex-column images-container'>
                        <div className='d-flex'>
                            <img className='solution-image' style={{ borderRadius: "0 0 30% 0" }} src={solutionImage1} />
                            <img className='solution-image' style={{ borderRadius: "0 0 0 30%" }} src={solutionImage2} />
                        </div>
                        <div className='d-flex'>
                            <img className='solution-image' style={{ borderRadius: "0 30% 0 0" }} src={solutionImage3} />
                            <img className='solution-image' style={{ borderRadius: "30% 0 0 0" }} src={solutionImage4} />
                        </div>
                    </div>
                        <ul className='solutions-list'>
                            <li>We are committed to providing quality IT Services</li>
                            <li>Really know the true needs and expectations of customers</li>
                            <li>Processes of achieving the excellence and continue improvements</li>
                            <li>Talented & experienced management solutions for IT</li>
                            <li>Our benefits are endless for local IT Companies & Startups</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}
export default WhyChooseUs