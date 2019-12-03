import React from 'react';
import { Nav, Navbar, Jumbotron, Button} from 'react-bootstrap';

// adjust link alignment with m-auto/mr-auto/ml-auto this puts logo on top of navbar

const Nav4 = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Nav className="m-auto">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                </Nav>
            </Navbar>
            <Navbar expand="lg" bg="dark" variant="dark">                
                <Nav className="m-auto">
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

export default Nav4;