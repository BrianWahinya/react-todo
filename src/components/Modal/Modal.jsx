import { useState } from "react";
import { Modal as ReactModal, ModalHeader, ModalBody } from "reactstrap";
import Button from "../Button/Button";
import "./css/modal.css";

const Modal = ({ button, body, footer }) => {
  const [modal, setModal] = useState(false);
  const toggle = (e) => {
    e.stopPropagation();
    setModal(!modal);
  };

  const handleDragButtonEvent = (e) => {
    e.stopPropagation();
  };

  const { title, form } = body;

  return (
    <div>
      <Button {...button} onClick={toggle} />
      <ReactModal
        isOpen={modal}
        toggle={toggle}
        onMouseDown={handleDragButtonEvent}
        onPointerDown={handleDragButtonEvent}
        onKeyDown={handleDragButtonEvent}
      >
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{form}</ModalBody>
      </ReactModal>
    </div>
  );
};

export default Modal;
