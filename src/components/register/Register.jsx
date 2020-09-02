import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

// import component
import LeftAuth from "../leftAuth/LeftAuth";

// import css
import "./register.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "",
};

class Register extends React.Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div className="container-auth">
        <LeftAuth />
        <div className="component-form">
          <Container>
            <Row className="no-gutters">
              <Col md={12} className="title-register">
                <p>Register</p>
              </Col>
              <Col md={12} className="form-register">
                <Form>
                  <Form.Group>
                    <Form.Label className="font-weight-bold">
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="input first name..."
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="font-weight-bold">
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="input last name..."
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="font-weight-bold">Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="input email..."
                      required
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label className="font-weight-bold">
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="input password..."
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="font-weight-bold">
                      Select Your Role
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="role"
                      onChange={this.handleChange}
                    >
                      <option>Select..</option>
                      <option>Enginer</option>
                      <option>Corporation</option>
                    </Form.Control>
                  </Form.Group>
                  <Button
                    variant="login"
                    size="lg"
                    block
                    className="button-login"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Register
                  </Button>
                  <Button
                    variant="register"
                    size="lg"
                    block
                    className="register"
                  >
                    Already sign up? Login
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Register;
