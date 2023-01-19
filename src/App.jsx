import NavBar from "./Routes/NavBar";
import "./index.css";
import ItemListContainer from "./Routes/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./NotFound";
import Nosotros from "./Routes/Nosotros";
import ItemDetailContainer from "./Routes/ItemDetailContainer";
import datosJson from "./datos.json";
import { useEffect, useState } from "react";

function App() {
  const [datos, setDatos] = useState([]);

  function handleFetch() {
    let datos1 = datosJson;
    setDatos(datos1);
  }

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar post="fixed" />
        <Routes>
          <Route path="/" element={<ItemListContainer datosJson={datos} />} />
          <Route
            path="/category/:id"
            element={<ItemListContainer datosJson={datos} />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer datosJson={datos} />}
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
