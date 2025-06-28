import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./index.css"

function NavigationBar() {
  return (
    <Navbar collapseOnSelect sticky='top' expand="lg" className="navbar-background" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className='brand' href="/">Tech Kalibre</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link className='brand' href="/">Home</Nav.Link>
            <Nav.Link className='brand' href="about">About</Nav.Link>
            <Nav.Link className='brand' href="services">Services</Nav.Link>
            {/* <Nav.Link className='brand' href="/">Careers</Nav.Link> */}
            {/* <NavDropdown className='brand' title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#services">Cyber Security</NavDropdown.Item>
              <NavDropdown.Item href="#services">
              Data Analytics
              </NavDropdown.Item>
              <NavDropdown.Item href="#services">Web Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#services">
              Apps Development
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#services">Services</Nav.Link> */}
            <Nav.Link className='brand' eventKey={2} href="contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;