import Slider from 'react-slick';
import './index.css'
import c1 from '../../assets/images/vendors/Azamara_Logo.png'
import c2 from '../../assets/images/vendors/ncl_logo.png'
import c3 from '../../assets/images/vendors/vendor-3.jpg'
import c4 from '../../assets/images/vendors/vendor-4.jpg'
import c5 from '../../assets/images/vendors/vendor-5.jpg'
import c6 from '../../assets/images/vendors/vendor-6.jpg'
import c7 from '../../assets/images/vendors/vendor-7.jpg'
import c8 from '../../assets/images/vendors/vendor-8.jpg'


// import c1 from '../../assets/images/vendors/vendor-1.jpg'
// import c2 from '../../assets/images/vendors/vendor-2.jpg'

const Clients = () => {

    // const settings = {
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //   };

    //   const  clients = [c1, c2]

    return (
        // <div className="clients-container">
        //     <h2>Our Clients</h2>
        //     <Slider {...settings}>
        //         {clients.map((client, index) => (
        //             <div key={index} className="client-item">
        //                 {client}
        //             </div>
        //         ))}
        //     </Slider>
        // </div>
        <>
        <h2 className='text-center'>Our Clients</h2>
        <div className='logos d-flex'>
            <div className='logos-slide'>
                <img src={c1} className='logo-image' alt="c1" />
                <img src={c2} className='logo-image' alt="c2" />
                <img src={c3} className='logo-image' alt="c3" />
                <img src={c4} className='logo-image' alt="c4" />
                <img src={c5} className='logo-image' alt="c5" />
                <img src={c6} className='logo-image' alt="c6" />
                <img src={c7} className='logo-image' alt="c7" />
                <img src={c8} className='logo-image' alt="c8" />
            </div>
            <div className='logos-slide'>
                <img src={c1} className='logo-image' alt="c1" />
                <img src={c2} className='logo-image' alt="c2" />
                <img src={c3} className='logo-image' alt="c3" />
                <img src={c4} className='logo-image' alt="c4" />
                <img src={c5} className='logo-image' alt="c5" />
                <img src={c6} className='logo-image' alt="c6" />
                <img src={c7} className='logo-image' alt="c7" />
                <img src={c8} className='logo-image' alt="c8" />
            </div>
        </div>
        </>
    )
}

export default Clients