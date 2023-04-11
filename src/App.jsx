import HeaderChitrin from "./components/header/headerChitrin";
import NavBar from "./components/nav/navBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <HeaderChitrin>
        <NavBar />
      </HeaderChitrin>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route
          exact
          path="/categoria/:categoriaid"
          element={<ItemListContainer />}
        />
        <Route
          exact
          path="/item/:productoid"
          element={<ItemDetailContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
