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
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  passwordError: "",
  roleError: "",
};

class Register extends React.Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let passwordError = "";
    let roleError = "";
    // let passwordError = "";

    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.firstName) {
      firstNameError = "first name cannot be blank";
    }

    if (!this.state.lastName) {
      lastNameError = "last name cannot be blank";
    }

    if (!this.state.role) {
      roleError = "role cannot be blank";
    }

    if (
      emailError ||
      passwordError ||
      firstNameError ||
      lastNameError ||
      roleError
    ) {
      this.setState({
        emailError,
        passwordError,
        firstNameError,
        lastNameError,
        roleError,
      });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
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

                    <Form.Text className="text-danger">
                      {this.state.firstNameError}
                    </Form.Text>
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

                    <Form.Text className="text-danger">
                      {this.state.lastNameError}
                    </Form.Text>
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

                    <Form.Text className="text-danger">
                      {this.state.emailError}
                    </Form.Text>
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

                    <Form.Text className="text-danger">
                      {this.state.passwordError}
                    </Form.Text>
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

                    <Form.Text className="text-danger">
                      {this.state.roleError}
                    </Form.Text>
                  </Form.Group>
                  <Button
                    variant="login"
                    size="lg"
                    block
                    className="button-register"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Register
                  </Button>
                  <Button variant="register" size="lg" block className="login">
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
