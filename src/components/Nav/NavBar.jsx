import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <div>
        <button>Introduccion</button>
        <button>Tecnologia</button>
        <button>Esoterismo</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
