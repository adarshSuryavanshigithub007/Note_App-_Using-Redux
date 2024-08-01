import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { logOut } from '../action/userLoginAction';
const NavbarComponent = () => {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(logOut())
    }
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/addbook">Add New Book</Nav.Link>
                            <Nav.Link href="/allbooks">All Books</Nav.Link>
                            <button className="btn btn-sm btn-danger" type="button" onClick={logout}>Log Out</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
