import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navbarr() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='linkk'>
                                <NavLink className="navbar-link" to="/">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link className='linkk'>
                                <NavLink className="navbar-link" to="/about">About</NavLink>
                            </Nav.Link>
                            <Nav.Link className='linkk'>
                                <NavLink className="navbar-link" to="/user/Akash">Akash</NavLink>
                            </Nav.Link>
                            <Nav.Link className='linkk'>
                                <NavLink className="navbar-link" to="/user/Gaurav">Gaurav</NavLink>
                            </Nav.Link>
                            <Nav.Link className='linkk'>
                                <NavLink className="navbar-link" to="/filter">Filter</NavLink>
                            </Nav.Link>
                            <Nav.Link className='linkk'>
                                <NavLink className="navbar-link" to="/contact">Contact</NavLink>
                            </Nav.Link>
                            <Nav.Link className='linkk'>
                                <NavLink className="navbar-link" to="/login">Login</NavLink>
                            </Nav.Link>
                            <Nav.Link className='linkk'>
                                <NavLink className="navbar-link" to="/api">Call Api</NavLink>
                            </Nav.Link>
                            <Nav.Link className='linkk'>
                                <NavLink className="navbar-link" to="/postapi">Post Api</NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navbarr