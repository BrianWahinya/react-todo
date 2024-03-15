import { Button as ReactButton } from "reactstrap";
import "./button.css";

const Button = (props) => {
  const { btnName, btnIcon, ...obj } = props;
  return (
    <ReactButton
      {...obj}
      className={`todo-btn ${btnIcon && btnName && "full-btn"}`}
    >
      {btnIcon && <span className="icon">{btnIcon}</span>}
      {btnName && <span className="text">{btnName}</span>}
    </ReactButton>
  );
};

export default Button;
