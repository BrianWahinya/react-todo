import Button from "../Button/Button";
import { PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";
import "./css/popup.css";

const ConfirmPopup = ({ button, title, action }) => {
  return (
    <div>
      <Button {...button} />
      {!button.disabled && (
        <UncontrolledPopover trigger="legacy" target={button.id}>
          <PopoverHeader>{title}</PopoverHeader>
          <PopoverBody>
            <Button
              id="btnConfirm"
              btnName="Confirm"
              color="danger"
              onClick={action}
              disabled={button.disabled}
              outline
            />
          </PopoverBody>
        </UncontrolledPopover>
      )}
    </div>
  );
};

export default ConfirmPopup;
