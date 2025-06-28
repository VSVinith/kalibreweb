import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './index.css'

const ContactUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    // const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        // }

        // setValidated(true);

        // const options = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         email,
        //         name,
        //         subject,
        //         message
        //     })
        // }

        const res = await fetch("http://localhost:8080/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                name,
                subject,
                message
            })
        })

        console.log(res)
        const data = await res.json()
        console.log(data)

        if (res.ok) {
            alert("submitted succesfully")
            setEmail("")
            setMessage("")
            setName("")
            setSubject("")
        } else {
            alert("problem in submission")
        }
    };

    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangeSubject = (event) => {
        setSubject(event.target.value)
    }
    const onChangeMessage = (event) => {
        setMessage(event.target.value)
    }

    return (
        // <div className="contact-us-container">
        //     <h3 className='text-font' style={{ color: "rgb(45, 148, 238)", fontWeight: 1000 }}>Contact Us</h3>
        //     <h2 className='text-font' style={{ fontWeight: 800 }}>If you have any query, feel free to reach us</h2>
        //     <div className="contact-info mt-5">
        //         <div className='d-flex m-5'>
        //             <FontAwesomeIcon icon={faPhone} size='3x' style={{ color: "rgb(45, 148, 238)", marginRight: 30 }} />
        //             <div className='text-font'>
        //                 <h5>Call to ask any question</h5>
        //                 <h3 style={{ color: "rgb(45, 148, 238)" }}>+91 99837 00000</h3>
        //             </div>
        //         </div>
        //         <div className='d-flex m-5'>
        //             <FontAwesomeIcon icon={faEnvelope} size='3x' style={{ color: "rgb(45, 148, 238)", marginRight: 30 }} />
        //             <div className='text-font'>
        //                 <h5>Email to get free quote</h5>
        //                 <h3 style={{ color: "rgb(45, 148, 238)" }}>info@mail.com</h3>
        //             </div>
        //         </div>
        //         <div className='d-flex m-5'>
        //             <FontAwesomeIcon icon={faLocationDot} size='3x' style={{ color: "rgb(45, 148, 238)", marginRight: 30 }} />
        //             <div className='text-font'>
        //                 <h5>Visit Our Office</h5>
        //                 <h3 style={{ color: "rgb(45, 148, 238)" }}>Hyderabad</h3>
        //             </div>
        //         </div>
        //     </div>

        //     <div className='d-flex justify-content-space-between'>
        //         <Form className='w-50' noValidate validated={validated} onSubmit={handleSubmit}>
        //             <Row className="mb-3">
        //                 <Form.Group  as={Col} md="4" controlId="validationCustom01">
        //                     <Form.Floating >
        //                         <Form.Control
        //                             style={{backgroundColor: "#EEF9FF", border:"none"}}
        //                             required
        //                             id="Name"
        //                             type="text"
        //                             placeholder="Name"
        //                             defaultValue=""
        //                         />
        //                         <label htmlFor="Name">Name</label>
        //                     </Form.Floating>
        //                     <Form.Control.Feedback>Ok!</Form.Control.Feedback>

        //                 </Form.Group>

        //                 <Form.Group as={Col} md="6" controlId="validationCustomUsername">

        //                     <InputGroup hasValidation>
        //                         <Form.Floating>
        //                             <Form.Control
        //                             style={{backgroundColor: "#EEF9FF", border:"none"}}
        //                                 type="text"
        //                                 placeholder="Email"
        //                                 id="Email"
        //                                 aria-describedby="inputGroupPrepend"
        //                                 required
        //                             />
        //                             <label htmlFor="Email">Email</label>
        //                         </Form.Floating>
        //                         <Form.Control.Feedback type="invalid">
        //                             Please provide a valid email.
        //                         </Form.Control.Feedback>

        //                     </InputGroup>

        //                 </Form.Group>
        //             </Row>
        //             <Row className="mb-3">
        //                 <Form.Group as={Col} md="10" controlId="validationCustom03">
        //                     <Form.Floating>
        //                         <Form.Control style={{backgroundColor: "#EEF9FF", border:"none"}} id="Subject" type="text" placeholder="Subject" required />
        //                         <label htmlFor="Subject">Subject</label>
        //                     </Form.Floating>
        //                     <Form.Control.Feedback type="invalid">
        //                         Please provide a valid Subject.
        //                     </Form.Control.Feedback>
        //                 </Form.Group>
        //             </Row>
        //             <Row>
        //                 <Form.Group as={Col} md="10" controlId="validationCustom04">
        //                     <Form.Floating>
        //                         <Form.Control style={{backgroundColor: "#EEF9FF", border:"none"}} id="Message" as="textarea" placeholder="Message" required />
        //                         <label htmlFor="Message">Message</label>
        //                     </Form.Floating>
        //                     <Form.Control.Feedback type="invalid">
        //                         Please provide a valid Message.
        //                     </Form.Control.Feedback>
        //                 </Form.Group>

        //             </Row>
        //             <Row className="mb-3 mt-3">
        //                 <Form.Group as={Col} md="10" className="mb-3">
        //                     <Form.Check
        //                         required
        //                         label="Agree to terms and conditions"
        //                         feedback="You must agree before submitting."
        //                         feedbackType="invalid"
        //                     />
        //                 </Form.Group>
        //             </Row>
        //             <Button style={{backgroundColor: "rgb(45, 148, 238)", border:"none"}} type="submit">Submit</Button>
        //         </Form>

        //         <div className='w-50'>
        //             <iframe
        //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.26064964549!2d78.29857467827865!3d17.443970413717658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276decedf%3A0x2c12e79e6f9344e2!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699188196470!5m2!1sen!2sin"
        //                 width="100%"
        //                 height="350"
        //                 loading="lazy"
        //                 title="location"
        //                 referrerpolicy="no-referrer-when-downgrade"
        //             ></iframe>
        //         </div>
        //     </div>

        // </div>


        // const {name, message, subject, email } = this.state
        <>

            <div className='contact-container'>
                <div className='contact-banner'>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className=' contact-sub'>
                        <h5 style={{ textDecoration: "underline #585959" }}>Tech Kalibre - Send Us A Message</h5>
                        <h1>Do You Have Any Questions? We'll Be Happy To Assist You! </h1>
                    </div>
                    <div className='details-container' data-aos="fade-down">
                        {/* <h5>Get in Touch</h5> */}
                        <div className='details mt-5'>
                            <Form className='' onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Floating >
                                            <Form.Control
                                                style={{ backgroundColor: "#EEF9FF", border: "none" }}
                                                required
                                                id="Name"
                                                type="text"
                                                placeholder="Name"
                                                value={name}
                                                onChange={onChangeName}
                                            />
                                            <label htmlFor="Name">Name</label>
                                        </Form.Floating>
                                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>

                                    </Form.Group>

                                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">

                                        <InputGroup hasValidation>
                                            <Form.Floating>
                                                <Form.Control
                                                    style={{ backgroundColor: "#EEF9FF", border: "none" }}
                                                    type="email"
                                                    placeholder="Email"
                                                    id="Email"
                                                    value={email}
                                                    aria-describedby="inputGroupPrepend"
                                                    onChange={onChangeEmail}
                                                    required
                                                />
                                                <label htmlFor="Email">Email</label>
                                            </Form.Floating>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid email.
                                            </Form.Control.Feedback>

                                        </InputGroup>

                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="10" controlId="validationCustom03">
                                        <Form.Floating>
                                            <Form.Control style={{ backgroundColor: "#EEF9FF", border: "none" }} value={subject} id="Subject" type="text" placeholder="Subject" onChange={onChangeSubject} required />
                                            <label htmlFor="Subject">Subject</label>
                                        </Form.Floating>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Subject.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} md="10" controlId="validationCustom04">
                                        <Form.Floating>
                                            <Form.Control style={{ backgroundColor: "#EEF9FF", border: "none" }} value={message} id="Message" as="textarea" rows={4} placeholder="Message" onChange={onChangeMessage} required />
                                            <label htmlFor="Message">Message</label>
                                        </Form.Floating>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Message.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                </Row>
                                <Button style={{ backgroundColor: "#202442", border: "none", margin: "15px" }} type="submit">Submit</Button>
                            </Form>


                        </div>
                    </div>
                </div>

                <div className='mb-5 d-flex justify-content-evenly w-100'>
                    <div className='shadow'  >
                        <h3 className='p-3' style={{ backgroundColor: "#202442", color: "beige" }}>Hyderabad Office</h3>
                        <div className='p-4'>
                            <p>47 Circle, City Center  500098</p>
                            <p>Call us (+91) 910.369.2580</p>
                            <p>support@techkalibre.com</p>
                        </div>
                    </div>
                    <div className='w-50'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.26064964549!2d78.29857467827865!3d17.443970413717658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276decedf%3A0x2c12e79e6f9344e2!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699188196470!5m2!1sen!2sin"
                            width="100%"
                            height="290"
                            loading="lazy"
                            title="location"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className='mobile-contact-container'>
                <div className='contact-banner'>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className=' contact-sub mt-3'>
                        <h5 style={{ textDecoration: "underline #585959" }}>Tech Kalibre - Send Us A Message</h5>
                        <h1>Do You Have Any Questions? We'll Be Happy To Assist You! </h1>
                    </div>
                    <div className='details-container' data-aos="fade-down">
                        {/* <h5>Get in Touch</h5> */}
                        <div className='details shadow p-3 mt-5'>
                            <Form className='' onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Floating >
                                            <Form.Control
                                                style={{ backgroundColor: "#EEF9FF", border: "none" }}
                                                required
                                                id="Name"
                                                type="text"
                                                placeholder="Name"
                                                value={name}
                                                onChange={onChangeName}
                                            />
                                            <label htmlFor="Name">Name</label>
                                        </Form.Floating>
                                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>

                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">

                                        <InputGroup hasValidation>
                                            <Form.Floating>
                                                <Form.Control
                                                    style={{ backgroundColor: "#EEF9FF", border: "none" }}
                                                    type="email"
                                                    placeholder="Email"
                                                    id="Email"
                                                    value={email}
                                                    aria-describedby="inputGroupPrepend"
                                                    onChange={onChangeEmail}
                                                    required
                                                />
                                                <label htmlFor="Email">Email</label>
                                            </Form.Floating>
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid email.
                                            </Form.Control.Feedback>

                                        </InputGroup>

                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="10" controlId="validationCustom03">
                                        <Form.Floating>
                                            <Form.Control style={{ backgroundColor: "#EEF9FF", border: "none" }} value={subject} id="Subject" type="text" placeholder="Subject" onChange={onChangeSubject} required />
                                            <label htmlFor="Subject">Subject</label>
                                        </Form.Floating>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Subject.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} md="10" controlId="validationCustom04">
                                        <Form.Floating>
                                            <Form.Control style={{ backgroundColor: "#EEF9FF", border: "none" }} value={message} id="Message" as="textarea" rows={4} placeholder="Message" onChange={onChangeMessage} required />
                                            <label htmlFor="Message">Message</label>
                                        </Form.Floating>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Message.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Button style={{ backgroundColor: "#202442", border: "none", margin: "15px" }} type="submit">Submit</Button>
                            </Form>


                        </div>
                    </div>
                </div>

                <div className='m-1 d-flex flex-column justify-content-center align-items-center'>
                    <div className='shadow'  >
                        <h3 className='p-3' style={{ backgroundColor: "#202442", color: "beige" }}>Hyderabad Office</h3>
                        <div className='p-4'>
                            <p>47 Circle, City Center  500098</p>
                            <p>Call us (+91) 910.369.2580</p>
                            <p>support@techkalibre.com</p>
                        </div>
                    </div>
                    <div className='w-75 mt-3'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.26064964549!2d78.29857467827865!3d17.443970413717658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276decedf%3A0x2c12e79e6f9344e2!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699188196470!5m2!1sen!2sin"
                            width="100%"
                            height="290"
                            loading="lazy"
                            title="location"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs


{/* <FontAwesomeIcon icon={faPhone} size='2x' style={{ color: "rgb(64, 64, 64)", marginRight: 30, marginLeft: 100 }} /> */ }
