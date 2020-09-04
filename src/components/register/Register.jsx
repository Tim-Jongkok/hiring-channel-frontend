import React, { Fragment } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

// import component
import LeftAuth from "../leftAuth/LeftAuth";

// import css
import "./register.css";

const initialState = {
  corporateName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "",
  corporateNameError: "",
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  passwordError: "",
  roleError: "",
  enginers: true,
};

class Register extends React.Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    let corporateNameError = "";
    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let passwordError = "";
    let roleError = "";
    // let passwordError = "";

    if (!this.state.corporateName) {
      corporateNameError = "corporate name cannot be blank";
    }

    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    const stringPassword = this.state.password;
    const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

    if (!reg.test(stringPassword)) {
      passwordError =
        "password must be include lowerCase, upperCase, numbers and minimum 8 characters";
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

    if (this.state.enginers) {
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
    } else {
      if (emailError || passwordError || roleError || corporateNameError) {
        this.setState({
          emailError,
          passwordError,
          roleError,
          corporateNameError,
        });
        return false;
      }
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
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="font-weight-bold">
                      Select Your Role
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="role"
                      value={this.state.role}
                      onChange={(event) => {
                        if (event.target.value === "2") {
                          this.setState({
                            [event.target.name]: event.target.value,
                            enginers: false,
                          });
                        } else {
                          this.setState({
                            [event.target.name]: event.target.value,
                            enginers: true,
                          });
                        }
                      }}
                    >
                      <option>--Select your role--</option>
                      <option value="1">Enginer</option>
                      <option value="2">Corporation</option>
                    </Form.Control>
                    <Form.Text className="text-danger">
                      {this.state.roleError}
                    </Form.Text>
                  </Form.Group>

                  {!this.state.enginers ? (
                    <Form.Group>
                      <Form.Label className="font-weight-bold">
                        Corporate Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="corporateName"
                        value={this.state.corporateName}
                        placeholder="input corporate name..."
                        required
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {this.state.corporateNameError}
                      </Form.Text>
                    </Form.Group>
                  ) : null}

                  {this.state.enginers ? (
                    <Fragment>
                      {" "}
                      <Form.Group>
                        <Form.Label className="font-weight-bold">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="input first name..."
                          value={this.state.firstName}
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
                          value={this.state.lastName}
                          onChange={this.handleChange}
                        />

                        <Form.Text className="text-danger">
                          {this.state.lastNameError}
                        </Form.Text>
                      </Form.Group>
                    </Fragment>
                  ) : null}

                  <Form.Group>
                    <Form.Label className="font-weight-bold">Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="input email..."
                      value={this.state.email}
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
                      value={this.state.password}
                      onChange={this.handleChange}
                    />

                    <Form.Text className="text-danger">
                      {this.state.passwordError}
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
