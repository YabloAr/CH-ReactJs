import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink class="NavLink" to="/">
          Home
        </NavLink>
        <NavLink to="/categoria/men's clothing">Ropa de Hombre</NavLink>
        <NavLink to="/categoria/women's clothing"> Ropa de Mujer </NavLink>
        <NavLink to="/categoria/electronics">Electronica</NavLink>
        <NavLink to="/categoria/jewelery"> Joyeria </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
