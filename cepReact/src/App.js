import React from 'react';
import logo from './logo.svg';
import { Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  const envia = function(){
    
  }

  return (
    <div className="App">
      
        <Container>
          <h1>Busca por CEP</h1>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Number id="cep">Digite aqui seu CEP</InputGroup.Number>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="CEP"
                  aria-label="CEP"
                  aria-describedby="cep"
                />
              </InputGroup>

            </Col>
            <Col>
              <Button type="button" 
                      class="btn btn-success" 
                      data-dismiss="alert" 
                      onClick={envia()}>
                <span aria-hidden="true">&times;</span>
              </Button>
            </Col>

          </Row>
        </Container>


    </div>
  );
}

export default App;
