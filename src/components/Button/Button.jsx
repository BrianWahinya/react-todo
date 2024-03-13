import { Button as ReactButton } from "reactstrap";

const Button = (props) => {
  return <ReactButton {...props}>{props.name}</ReactButton>;
};

export default Button;
