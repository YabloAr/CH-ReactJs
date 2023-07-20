import {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";

//En el ítemlistcontainer el fetch

const apiURL = "https://fakestoreapi.com/products";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("no error");
  const [loading, setLoading] = useState(false);
  const {categoriaid} = useParams();

  console.log(categoriaid);

  useEffect(() => {
    setLoading(true);

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        if (categoriaid !== undefined) {
          const productosFiltrados = data.filter((prod) => prod.category === categoriaid);

          setData(productosFiltrados);
        } else {
          setData(data);
        }
      })

      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  }, [categoriaid]);

  console.log(data);

  return (
    <div className="itemListContainer">
      <ItemList apiData={data} />
    </div>
  );
};

export default ItemListContainer;

// useEffect(() => {
//   const db = getFirestore();
//   const queryDoc = doc(db, "productos", "2OX2b8pT5J2QhhDlvhzx"); // 3 argumentos
//   getDoc(queryDoc).then((resp) => console.log(resp));
// }, []);
