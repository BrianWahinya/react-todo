import {
  FaTrashCan,
  FaSquareMinus,
  FaPlus,
  FaMinus,
  FaPenToSquare,
} from "react-icons/fa6";

const icons = {
  add: <FaPlus />,
  edit: <FaPenToSquare />,
  clear: <FaTrashCan />,
  delete: <FaMinus />,
};

const FaIcon = ({ type }) => {
  return icons[type];
};

export default FaIcon;
