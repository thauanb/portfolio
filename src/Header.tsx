import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./index.css"


function NavBarx() {
  return (
    <Navbar className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand  href="#home">ThauanDev</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default NavBarx;