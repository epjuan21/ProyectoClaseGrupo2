import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import './Login.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            usuario: '',
            pass: ''
         }
    }

    iniciarSesion() {
        alert(`Usuario: ${this.state.usuario} - Password: ${this.state.pass}`)        
    }

    render() {
        return (

            <Container id="login-container">
                <Row>
                    <Col>
                        <Row>
                            <h2>Iniciar Sesión</h2>
                        </Row>
                        <Row>
                            <Col 
                                sm="12"
                                xs="12"
                                md={{ span: 4, offset: 4 }}
                                lg={{ span: 4, offset: 4 }}
                                xl={{ span: 4, offset: 4 }}
                            >
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control
                                            onChange={ ( e ) => 
                                                this.setState({ usuario: e.target.value })
                                             }
                                            />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control
                                            type="password" 
                                            onChange={ ( e ) => 
                                                    this.setState({ pass: e.target.value })
                                                }
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="success"
                                        onClick={ () => { 
                                            this.iniciarSesion();
                                        } }
                                    >
                                        Iniciar Sesión
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        );
    }
}