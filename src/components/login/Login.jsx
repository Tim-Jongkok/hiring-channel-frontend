import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { loginUser, clearMsg } from "../../redux/actions/auth";

// import component
import LeftAuth from "../leftAuth/LeftAuth";

// import css
import "./login.css";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

class Login extends React.Component {
  state = initialState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
    let passwordError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  redirectpush = () => {
    return <Redirect push to="/" />;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.clrMsg();

    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    const isValid = this.validate();

    if (isValid) {
      this.props.loginUser(data);
    }
  };

  render() {
    return (
      <div className="container-auth">
        <LeftAuth />
        <div className="component-form">
          <Container>
            <Row className="no-gutters">
              <Col md={12} className="title-login">
                <p>Login</p>
              </Col>
              <Col md={12} className="form-login">
                <Form>
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
                      {this.props.state.authState.msgErrPassword}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <p className="text-right font-weight-bold btn-forgot">
                      Forgot Password ?
                    </p>
                  </Form.Group>
                  <Button
                    variant="login"
                    size="lg"
                    block
                    className="button-login"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Login
                  </Button>
                  <Button
                    variant="register"
                    size="lg"
                    block
                    className="register"
                    onClick={this.props.changeToRegister}
                  >
                    Register
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

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
    clrMsg: () => dispatch(clearMsg()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
