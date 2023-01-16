import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import CartWidget from "../components/NavBar/CartWidget";
import CartShop from "../components/NavBar/CartShop";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <div className="nav">
        <div className="logo">NH BLANQUERIA</div>
        <nav className="nav-link">
          <NavLink to="/nosotros" className="links">
            Nosotros
          </NavLink>
          <NavLink to="/" className="links">
            Productos
          </NavLink>
          <NavLink to="caracteristicas/" className="links">
            Caracteristicas
          </NavLink>
          <NavLink to="locales" className="links">
            Locales
          </NavLink>
        </nav>
        <div className="icon">
          <CartWidget btnRef={btnRef} onOpen={onOpen}></CartWidget>
        </div>
      </div>
      <div className="bloque"></div>

      <CartShop isOpen={isOpen} onOpen={onOpen} onClose={onClose}></CartShop>
    </>
  );
};

export default NavBar;
