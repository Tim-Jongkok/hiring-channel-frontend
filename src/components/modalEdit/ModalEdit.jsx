import React, { Fragment } from "react";
import { Button, Modal, Container, Form, Row, Col } from "react-bootstrap";

import "./modalEdit.css";

const initialState = {
  show: true,
  enginers: true,
  corporateName: "",
  firstName: "",
  lastName: "",
  location: "",
  totalProject: "",
  image: "",
  skill: "",
  deskription: "",
};

class ModalEdit extends React.Component {
  state = initialState;

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

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
      <>
        <Modal show={this.state.show} onHide={this.handleClose} scrollable>
          <Modal.Header className="modal-header" closeButton>
            <h5 className="tengah">Edit Profile</h5>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form>
                <Row>
                  {!this.state.enginers ? (
                    <Fragment>
                      <Col md={6} xs={12}>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            Corporate Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="corporateName"
                            placeholder="input corporate name..."
                            onChange={this.handleChange}
                          />
                          <Form.Text className="text-danger">
                            {/* {this.state.emailError} */}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col md={6} xs={12}>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            Field
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="field"
                            placeholder="input field..."
                            onChange={this.handleChange}
                          />
                          <Form.Text className="text-danger">
                            {/* {this.state.emailError} */}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                    </Fragment>
                  ) : null}

                  {this.state.enginers ? (
                    <Fragment>
                      {" "}
                      <Col md={6} xs={12}>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            First Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="input first name..."
                            onChange={this.handleChange}
                          />
                          <Form.Text className="text-danger">
                            {/* {this.state.emailError} */}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col md={6} xs={12}>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            Last Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="input last name..."
                            onChange={this.handleChange}
                          />
                          <Form.Text className="text-danger">
                            {/* {this.state.emailError} */}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                    </Fragment>
                  ) : null}

                  <Col md={12} xs={12}>
                    <Form.Group>
                      <Form.Label className="font-weight-bold">
                        Location
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="location"
                        placeholder="input your location..."
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {/* {this.state.emailError} */}
                      </Form.Text>
                    </Form.Group>
                  </Col>

                  {this.state.enginers ? (
                    <Fragment>
                      {" "}
                      <Col md={12} xs={12}>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            Total Project
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="totalProject"
                            placeholder="input total project..."
                            onChange={this.handleChange}
                          />
                          <Form.Text className="text-danger">
                            {/* {this.state.emailError} */}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                    </Fragment>
                  ) : null}

                  <Col md={12} xs={12}>
                    <Form.Group>
                      <Form.Label className="font-weight-bold">
                        Image
                      </Form.Label>
                      <Form.File
                        id="image"
                        name="image"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {/* {this.state.emailError} */}
                      </Form.Text>
                    </Form.Group>
                  </Col>

                  {this.state.enginers ? (
                    <Fragment>
                      {" "}
                      <Col md={12} xs={12}>
                        <Form.Group>
                          <Form.Label className="font-weight-bold">
                            Skill
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows="3"
                            name="skill"
                            onChange={this.handleChange}
                          />
                          <Form.Text className="text-danger">
                            {/* {this.state.emailError} */}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                    </Fragment>
                  ) : null}

                  <Col md={12} xs={12}>
                    <Form.Group>
                      <Form.Label className="font-weight-bold">
                        Deskription
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3"
                        name="deskription"
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-danger">
                        {/* {this.state.emailError} */}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="save" onClick={this.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalEdit;
