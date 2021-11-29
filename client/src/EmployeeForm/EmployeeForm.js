import React from "react";
import {
    Form, Row, Col, Button

} from "react-bootstrap";
import './EmployeeForm.css'
function EmployeeForm() {
    return (
        <>
        <p className="FormTitle">Employee Form</p>
        <Form className="employeeForm">
           
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control placeholder="UserName" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>



            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Department</Form.Label>
                <Form.Control placeholder="Department" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Role</Form.Label>
                    <Form.Control placeholder="Role" />
                </Form.Group>
            </Row>



            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
        </>
    )
}

export default EmployeeForm;