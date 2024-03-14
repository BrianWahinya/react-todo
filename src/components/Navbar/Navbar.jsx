import { useState } from "react";
import {
  Collapse,
  Navbar as ReactNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";
import "./navbar.css";
import icon_todo_light from "../../assets/icon_todo_light.svg";

const Navbar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <ReactNavbar
      dark
      light
      full="true"
      fixed="top"
      expand="md"
      container="md"
      color="dark"
      {...args}
    >
      <NavbarBrand href="/">
        <img
          alt="logo"
          src={icon_todo_light}
          style={{
            height: 30,
            width: 30,
          }}
        />
        Todo
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar></Nav>
        <NavbarText className="copyright">
          {new Date().getFullYear()} &copy;{" "}
          <a
            href="https://brianwebportal.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            BrianWahinya
          </a>
        </NavbarText>
      </Collapse>
    </ReactNavbar>
  );
};

export default Navbar;
