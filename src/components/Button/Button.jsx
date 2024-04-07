import { Button as ReactButton } from "reactstrap";
import "./button.css";

const Button = (props) => {
  const { btnName, btnIcon, btnClass, ...obj } = props;
  // console.log(obj);
  const handleDragButtonEvent = (e) => {
    e.stopPropagation();
  };

  return (
    <ReactButton
      {...obj}
      className={`todo-btn ${(btnIcon && btnName && "full-btn") || ""} ${
        btnClass || ""
      }`}
      onMouseDown={handleDragButtonEvent}
      onPointerDown={handleDragButtonEvent}
      onKeyDown={handleDragButtonEvent}
    >
      {btnIcon && <span className="icon">{btnIcon}</span>}
      {btnName && <span className="text">{btnName}</span>}
    </ReactButton>
  );
};

export default Button;
