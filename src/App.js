import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/form';
import Summary from './components/summary';
import BuildSummary from './services/actions';

class App extends Component {
  state = {}
  onSubmit = async (state) => {
    const values = await BuildSummary(state);
    this.setState(values);
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h1>Payment Schedule Calculator</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={this.onSubmit} />
            </Col>
            <Col>
              <Summary values={this.state} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
