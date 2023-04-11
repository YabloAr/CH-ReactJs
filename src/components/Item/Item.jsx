import { NavLink } from "react-router-dom";

const Item = ({ titulo, imgUrl, info, id }) => {
  return (
    <div className="card-container">
      <h3>{titulo} </h3>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt="Item Image" />
      </div>
      <div className="info-container">
        <h3>Detalles</h3> {info}
      </div>
      <NavLink to={`/item/${id}`}> Detalles </NavLink>
    </div>
  );
};

export default Item;
