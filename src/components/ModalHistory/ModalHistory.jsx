import React from "react";
import { Modal, Table } from "react-bootstrap";
import { useSelector } from 'react-redux';
import moment from 'moment';

//import css
import "./ModalHistory.css";
//import img
import imgStar from "../../assets/img/star.png";

const ModalHistory = (props) => {

  const userHistoryStore = useSelector((state) => {
    return state.userState.userHistory;
  });

  console.log(userHistoryStore);
  return (
    <>
      <Modal show={props.showModalHistory} size="lg" onHide={props.handleCloseModalHistory} centered>
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
              {userHistoryStore.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.corporate_name}</td>
                    <td>{moment(item.hire_date).format('DD MMMM YYYY')}</td>
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
  // }
};

export default ModalHistory;
