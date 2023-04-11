//En el ítemlist le pasas lo que sacaste del fetch acá y haces el mapeo
//En el ítem mostras lo que te dio ese primer fetch haciendo las cards con props (llenas por props lo que tenes en ítemlist mapeado)

import React from "react";
import Item from "../Item/Item";

const ItemList = ({ apiData }) => {
  return (
    <>
      {apiData.map((product) => (
        <Item
          titulo={product.title}
          imgUrl={product.image}
          info={product.description}
          key={product.id}
          id={product.id}
        />
      ))}
    </>
  );
};

export default ItemList;
