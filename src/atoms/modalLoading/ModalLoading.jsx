import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import "./ModalLoading.scss";

const ModalLoading = ({ showModal }) => {
  return (
    <Modal show={showModal} className="ModalLoading">
      <Modal.Body className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </Modal.Body>
    </Modal>
  );
};

export default ModalLoading;
