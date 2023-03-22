import HeaderChitrin from "./components/Header/HeaderChitrin";
import NavBar from "./components/nav/navBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  console.log(NavBar);
  return (
    <div id="headerChitrin">
      <HeaderChitrin />
      <NavBar />
      <ItemListContainer titulo="ILC" segundaPropiedad="Segunda prop" />
    </div>
  );
}

export default App;
