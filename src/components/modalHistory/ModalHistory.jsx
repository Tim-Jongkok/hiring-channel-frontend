import React, { useState } from "react";
import { Modal, Table, Row, Col } from "react-bootstrap";

//import css
import "./modalHistory.css";

const ModalHistory = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>
            <span className="align-middle">History</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive className="text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Traveloka</td>
                <td>03-09-2020</td>
                <td>Rating 100%</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalHistory;
