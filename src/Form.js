import React, { Component } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

export default class CalculatorForm extends Component {
    state = {
        financeOptions: 12
    }
    handleUserInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const { vehiclePrice } = this.state;

        return (<Form onSubmit={this.submit}>
            <Form.Group controlId="vehiclePrice">
                <Form.Label>Vehicle Price</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>£</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="number"
                        placeholder="Enter price"
                        required
                        name='vehiclePrice'
                        onChange={this.handleUserInput} />
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="depositAmount">
                <Form.Label>Desposit Amount</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>£</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="number"
                        min={vehiclePrice ? parseInt(vehiclePrice * 0.15) : 0}
                        placeholder="Enter deposit amount"
                        required
                        name='depositAmount'
                        onChange={this.handleUserInput} />
                </InputGroup>
                <Form.Text className="text-muted">
                    There is a minimum 15% deposit.
            </Form.Text>
            </Form.Group>
            <Form.Group controlId="deliveryDate">
                <Form.Label>Delivery Date</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="dd/mm/yyyy"
                    required
                    name='deliveryDate'
                    onChange={this.handleUserInput} />
            </Form.Group>
            <Form.Group controlId="financeOptions">
                <Form.Label>Finance Options</Form.Label>
                <Form.Control as="select" name='financeOptions' onChange={this.handleUserInput}>
                    <option value={12}>1 year</option>
                    <option value={24}>2 years</option>
                    <option value={36}>3 years</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
        </Button>
        </Form>);
    }
}