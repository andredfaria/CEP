import React, { Fragment } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const Regioes = (props) => {

    return (
        <Fragment>
            <Container>
                <h1 className="text-center">Busca Regiões</h1>
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

export default Regioes;