import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUsers } from '@fortawesome/free-solid-svg-icons'

import './index.css'

function Carousels() {
    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <div className='first-carousel carousel-image d-flex flex-column align-items-center justify-content-center'>
                    <h3 data-aos="slide-down">Creative & Innovative</h3>
                    <h1 data-aos="zoom-out">Creative & Innovative</h1>
                    <h1 data-aos="slide-up">Digital Solution</h1>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='second-carousel carousel-image d-flex flex-column align-items-center justify-content-center'>
                    <div className='d-flex justify-content-center'>
                        {/* <div className='stat-block stat-block-2 d-flex align-items-center justify-content-center '>

                            <FontAwesomeIcon icon={faUsers} size='3x' />
                            <div className="d-flex flex-column text-start m-3">
                                <h2>Happy Clients</h2>
                                <h4>34</h4>
                            </div>
                        </div>
                        <div className='stat-block stat-block-1 d-flex flex-column align-items-center justify-content-center'>
                            <h2>Projects</h2>
                            <h4>65</h4>
                        </div>
                        <div className='stat-block stat-block-2 d-flex flex-column align-items-center justify-content-center'>3</div> */}
                        <h2>Stats</h2>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='third-carousel carousel-image d-flex flex-column align-items-center justify-content-center'>
                    {/* <h3>Creative & Innovative</h3>
                    <h1>Creative & Innovative</h1>
                    <h1>Digital Solution</h1> */}
                    <h2>Mission</h2>
                </div>
                {/* <img
          className="d-block w-100 carousel-image"
          src={image1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;