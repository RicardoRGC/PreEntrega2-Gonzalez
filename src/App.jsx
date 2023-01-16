import NavBar from "./Routes/NavBar";
import "./index.css";
import ItemListContainer from "./Routes/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ErrorPage from "./NotFound";
import Nosotros from "./Routes/Nosotros";
import ItemDetailContainer from "./Routes/itemDetailContainer";
import datosJson from "./datos.json";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar post="fixed" />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer datosJson={datosJson} />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer datosJson={datosJson} />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer datosJson={datosJson} />}
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
