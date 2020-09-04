import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./FilterModal.css";

class FilterModal extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      sort: "name",
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  render() {
    return (
      <>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          size={"xs"}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="small-modal"
        >
          <Modal.Header style={{ background: "#AB84C8" }}>
            <h5
              style={{ textAlign: "center", width: "100%", fontSize: "1.5rem" }}
            >
              Sort
            </h5>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              as="select"
              className="small-selection"
              onChange={(e) => {
                this.setState({ sort: e.target.value });
              }}
            >
              <option value="name" selected>
                Name
              </option>
              <option value="rating">Rating</option>
              <option value="total_project">Total Project</option>
            </Form.Control>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              style={{ background: "#AB84C8" }}
              onClick={()=>{
                this.props.onSort(this.state.sort);
                this.handleClose();
              }}
            >
              Sort
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default FilterModal;
