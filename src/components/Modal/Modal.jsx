import { useState } from "react";
import {
  Modal as ReactModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Button from "../Button/Button";

const Modal = ({ button, body, footer }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { btnName, color } = button;
  const { title, form } = body;

  return (
    <div>
      <Button color={color} onClick={toggle} name={btnName} />
      <ReactModal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{form}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle} name="doSomething" />
          <Button color="secondary" onClick={toggle} name="cancel" />
        </ModalFooter>
      </ReactModal>
    </div>
  );
};

export default Modal;
