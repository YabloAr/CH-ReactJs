const ItemListContainer = (props) => {
  return (
    <div>
      <h3> Titulo del Componente: {props.titulo} </h3>
      <h5>Segunda Propiedad: {props.segundaPropiedad} </h5>
    </div>
  );
};

export default ItemListContainer;
