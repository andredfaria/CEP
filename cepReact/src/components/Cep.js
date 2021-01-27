import React, { Fragment } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const Cep = (props) => {

    return (
        <Fragment>
            <Container>
                <h1 className="text-center">Busca Localidade por CEP</h1>
                <Row className="justify-content-md-center ">
                    <Col>
                        <input type="number"
                            id="cep"
                            placeholder="Digite aqui seu Cep"
                            className="form-control" />
                    </Col>
                    <Col>
                        <input type="button"
                            name="envar"
                            id="btnEnviar"
                            onClick="enviar()"
                            value="enviar"
                            className="btn btn-primary"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type="text"
                            className="form-control"
                            id="localidade"
                            placeholder="Localidade"
                        />
                    </Col>
                    <Col>
                        <input type="text"

                            id="bairro"
                            className="form-control"
                            placeholder="Bairro"
                        />
                    </Col>
                    <Col>
                        <input type="text"
                            id="rua"
                            placeholder="Rua"
                            className="form-control"
                        />
                    </Col>
                    <Col>
                        <input type="text"
                            id="estado"
                            placeholder="Estado"
                            className="form-control"
                        />

                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-10">
                    <Col>
                        <textarea name="texareaCEP"
                            className="form-control"
                            id="texareaCEP"
                            cols="30"
                            rows="10"></textarea>
                    </Col>
                </Row>
                <Row className="mt-10">
                    <Col className="float-right">
                        <Button className="btn btn-info">
                            Voltar
                        </Button>
                    </Col>
                    <Col className="col-1 float-right">
                        <Button className="btn btn-success">
                            Enviar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Cep;