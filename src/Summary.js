import React from 'react';
import { Card, Table, ListGroup } from 'react-bootstrap';

export default ({ values }) =>
    <Card>
        <Card.Header>Loan</Card.Header>
        <Card.Body>
            {!values.summary && <p>Please complete the fields on the left</p>}
            {values.summary && (
                <React.Fragment>
                    <Card.Title>Summary</Card.Title>
                    <Card.Text>
                        £{values.summary.monthlyPayment} / month for {values.summary.months} months
                        from {values.summary.startDate} to {values.summary.endDate}
                    </Card.Text>
                </React.Fragment>
            )}
            {values.schedule && <React.Fragment>
                <Card.Title>Payments</Card.Title>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount Due</th>
                        </tr>
                    </thead>
                    <tbody>
                        {values.schedule.map(item => (
                            <tr key={item.date}>
                                <td>{item.date}</td>
                                <td>£{item.value}</td>
                            </tr>))}
                    </tbody>
                </Table>
            </React.Fragment>
            }
            {values.cars && <React.Fragment>
                <Card.Title>Affordable Cars</Card.Title>
                <ListGroup variant="flush">
                    {values.cars.map(car => (<ListGroup.Item>{car}</ListGroup.Item>))}
                </ListGroup>
            </React.Fragment>}
        </Card.Body>
    </Card>;