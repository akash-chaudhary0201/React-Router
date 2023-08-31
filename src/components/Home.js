import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
    return (
        <>
            {/* <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#link" className='ms-3'>
                                <Link to="/about">About</Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <h1>
                This is Home Page.
            </h1>
        </>
    )
}

export default Home