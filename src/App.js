import React from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Container>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

            </Col>
            <Col>
              <Button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </Button>
            </Col>

          </Row>
        </Container>


    </div>
  );
}

export default App;
