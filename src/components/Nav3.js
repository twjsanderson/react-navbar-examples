import React from 'react';
import { Nav, Navbar, Jumbotron, Button} from 'react-bootstrap';


// TODO: add responsiveness
const Nav3 = () => {
    return (
        <>
            <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="" href="#home">Home</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#features">Pricing</Nav.Link>
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

export default Nav3;