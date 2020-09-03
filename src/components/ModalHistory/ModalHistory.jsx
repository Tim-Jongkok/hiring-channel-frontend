import React from "react";
import { Modal, Table } from "react-bootstrap";

//import css
import "./ModalHistory.css";
//import img
import imgStar from "../../assets/img/star.png";

const ModalHistory = (props) => {
  // const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={props.showModalHistory} size="lg" onHide={props.handleCloseModalHistory} centered>
        <Modal.Header className="modal-header" closeButton>
          <h5 className="tengah">History</h5>
        </Modal.Header>
        <Modal.Body>
          <Table responsive className="text-center">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Date</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Traveloka</td>
                <td>03-09-2020</td>
                <td>
                  <img src={imgStar} alt="imgStar" className="img-star" />
                  Rating 100%
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Tokopedia</td>
                <td>04-09-2020</td>
                <td>
                  <img src={imgStar} alt="imgStar" className="img-star" />
                  Rating 100%
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalHistory;
