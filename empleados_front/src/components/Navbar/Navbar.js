import React from "react";
import { Container, DropdownButton, Nav, Navbar, Dropdown, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
// import Logo from '../Img/Logo.png';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Navbar fixed="top" id="navbar" bg="primary" variant="dark">
                <Container>
                    <img className="img-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="Logo"/>
                    <Navbar.Brand href="#home">Grupo 2 Mision Tic <span id="usuario-sub-brand"></span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" title="Usuario">
                            <Dropdown.Header id="dropdown-header">
                                <Row>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </Row>
                                <Row>
                                    Usuario
                                </Row>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
