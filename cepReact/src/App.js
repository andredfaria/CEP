import React from 'react';
import Button  from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';
import Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    
    return (
        <body className="bg-secondary">
            <Container>
                <Row>
                    <Col>
                        <Button onClick={() => { window.location.href = "/cep";}} variant="primary">Cep</Button>
                        <Button onClick={() => { window.location.href = "/regioes"; }} variant="primary">Regiões</Button>
                        <Button onClick={() => { window.location.href = "/nome"; }} variant="primary">Nome</Button>
                    </Col>
                </Row>
            </Container>
            <h1>Em construção</h1>
        </body>
    )
}

export default App;
