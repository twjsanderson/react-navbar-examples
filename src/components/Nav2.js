import React from 'react';
import { Nav, Navbar, Jumbotron, Button} from 'react-bootstrap';

// Nav className controls alignment of links
// Navbar.Brand className controls when that element disappears and reappears with d-block and d-none (choose a size: sm, lg, etc)

function Nav2() {
  return (
    <>
    <Navbar expand="sm" bg="dark" variant="dark">
        <Nav className="mx-auto">
          <Navbar.Brand className="d-block d-sm-none" href="#home">Home</Navbar.Brand>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#features">Pricing</Nav.Link>
          <Navbar.Brand className="centeredBrand d-none d-sm-block" href="#home">Home</Navbar.Brand>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#features">Contact</Nav.Link>
        </Nav>
    </Navbar>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
    </>
  );
}

export default Nav2;
