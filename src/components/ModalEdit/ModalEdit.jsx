import React, { Fragment, useState } from "react";
import { Button, Modal, Container, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from "../../redux/actions/user";
import { useHistory } from "react-router-dom";

import "./ModalEdit.css";

const ModalEdit = (props) => {
  const [userDetail, setUserDetail] = useState({});

  const userDetailStore = useSelector((state) => {
    return state.userState.userDetail;
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const handleImgPathInput = (e) => {
    const { name, files } = e.target;
    setUserDetail({
      ...userDetail,
      [name]: files[0],
    });
  };

  const handleChange = (event) => {
    setUserDetail({
      ...userDetail,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        // "x-access-token": "Bearer " + this.props.token,
      },
    };
    let formData = new FormData();
    for (let key in userDetail) {
      formData.append(key, userDetail[key]);
    }
    event.preventDefault();
    dispatch(
      updateUserData(
        history.location.pathname,
        "UPDATE_USER_DATA",
        formData,
        config
      )
    );
    props.handleCloseModalEdit();
    // console.log(formData);
  };

  return (
    <>
      <Modal
        show={props.showModalEdit}
        className="form-register"
        onHide={props.handleCloseModalEdit}
        scrollable
        centered
      >
        <Modal.Header className="modal-header" closeButton>
          <h5 className="tengah">Edit Profile</h5>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row>
                {userDetailStore.type_name !== "Engineer" ? (
                  <Fragment>
                    <Col md={12} xs={12}>
                      <Form.Group>
                        <Form.Label className="font-weight-bold">
                          Corporate Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="corporate_name"
                          placeholder="input corporate name..."
                          onChange={handleChange}
                          defaultValue={userDetailStore.corporate_name}
                        />
                        <Form.Text className="text-danger">
                          {/* {state.emailError} */}
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Fragment>
                ) : null}

                {userDetailStore.type_name === "Engineer" ? (
                  <Fragment>
                    {" "}
                    <Col md={6} xs={12}>
                      <Form.Group>
                        <Form.Label className="font-weight-bold">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="first_name"
                          placeholder="input first name..."
                          onChange={handleChange}
                          defaultValue={userDetailStore.first_name}
                        />
                        <Form.Text className="text-danger">
                          {/* {state.emailError} */}
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
                          name="last_name"
                          placeholder="input last name..."
                          onChange={handleChange}
                          defaultValue={userDetailStore.last_name}
                        />
                        <Form.Text className="text-danger">
                          {/* {state.emailError} */}
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Fragment>
                ) : null}

                <Col md={6} xs={12}>
                  <Form.Group>
                    <Form.Label className="font-weight-bold">
                      Field
                        </Form.Label>
                    <Form.Control
                      type="text"
                      name="field"
                      placeholder="input field..."
                      onChange={handleChange}
                      defaultValue={userDetailStore.field}
                    />
                    <Form.Text className="text-danger">
                      {/* {state.emailError} */}
                    </Form.Text>
                  </Form.Group>
                </Col>

                <Col md={6} xs={12}>
                  <Form.Group>
                    <Form.Label className="font-weight-bold">
                      Location
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="location"
                      placeholder="input your location..."
                      onChange={handleChange}
                      defaultValue={userDetailStore.location}
                    />
                    <Form.Text className="text-danger">
                      {/* {state.emailError} */}
                    </Form.Text>
                  </Form.Group>
                </Col>
                {userDetailStore.type_name === "Engineer" ? (
                  <Col md={6} xs={12}>
                    <Form.Group>
                      <Form.Label className="font-weight-bold">
                        Available
                      </Form.Label>
                      <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label="&nbsp;&nbsp;Available"
                        name="is_open"
                        defaultChecked={
                          Number(userDetailStore.is_open) === 1 ? true : false
                        }
                        onChange={(event) => {
                          setUserDetail({
                            ...userDetail,
                            [event.target.name]: Number(event.target.checked),
                          });
                        }}
                      />
                    </Form.Group>
                  </Col>
                ) : null}
                {userDetailStore.type_name === "Engineer" ? (
                  <Fragment>
                    {" "}
                    <Col md={12} xs={12}>
                      <Form.Group>
                        <Form.Label className="font-weight-bold">
                          Total Project
                        </Form.Label>
                        <Form.Control
                          type="number"
                          name="total_project"
                          placeholder="input total project..."
                          onChange={handleChange}
                          defaultValue={userDetailStore.total_project}
                        />
                        <Form.Text className="text-danger">
                          {/* {state.emailError} */}
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Fragment>
                ) : null}

                <Col md={12} xs={12}>
                  <Form.Group>
                    <Form.Label className="font-weight-bold">Image</Form.Label>
                    <Form.File
                      id="image"
                      name="image"
                      onChange={handleImgPathInput}
                    />
                    <Form.Text className="text-danger">
                      {/* {state.emailError} */}
                    </Form.Text>
                  </Form.Group>
                </Col>

                {userDetailStore.type_name === "Engineer" ? (
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
                          onChange={handleChange}
                          defaultValue={userDetailStore.skill}
                        />
                        <Form.Text className="text-danger">
                          {/* {state.emailError} */}
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Fragment>
                ) : null}

                <Col md={12} xs={12}>
                  <Form.Group>
                    <Form.Label className="font-weight-bold">
                      Description
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      name="description"
                      onChange={handleChange}
                      defaultValue={userDetailStore.description}
                    />
                    <Form.Text className="text-danger">
                      {/* {state.emailError} */}
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCloseModalEdit}>
            Close
          </Button>
          <Button variant="save" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  // }
};

export default ModalEdit;
