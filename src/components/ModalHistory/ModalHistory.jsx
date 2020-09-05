import React, { Component } from "react";
import { Modal, Table } from "react-bootstrap";

//import css
import "./ModalHistory.css";
//import img
import imgStar from "../../assets/img/star.png";

class ModalHistory extends Component {
  state = {
    history: [
      {
        corporate_name: "Traveloka",
        hire_date: "03-09-2020",
        rating: 100,
      },
      {
        corporate_name: "Tokopedia",
        hire_date: "04-09-2020",
        rating: 100,
      },
    ]
  }
  render() {
    return (
      <>
        <Modal show={this.props.showModalHistory} size="lg" onHide={this.props.handleCloseModalHistory} centered>
          <Modal.Header className="modal-header" closeButton>
            <h5 className="tengah">History</h5>
          </Modal.Header>
          <Modal.Body>
            <Table responsive className="text-center table-modal">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {this.state.history.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.corporate_name}</td>
                      <td>{item.hire_date}</td>
                      <td>
                        <img src={imgStar} alt="imgStar" className="img-star" />
                        {item.rating}%
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </>
    );
  }
};

export default ModalHistory;
