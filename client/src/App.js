import { Route, Routes, useLocation} from "react-router-dom";
import "./App.css";
import Index from "./components/Index/Index";
import Recipes from "./components/Recipes/Recipes";
import Nav from "./components/Nav/Nav";
import Crear from "./components/Crear/Crear";
import Recipe from "./components/Recipe/Recipe";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Pin from "./components/Pin/Pin";
import Panel from "./components/Panel/Panel";
import Error from "./components/Error/Error";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      { pathname !== "/" &&
        pathname !== "/register" &&
        pathname !== "/login" &&
        pathname !== "/pin" &&
        pathname !== "/panel" && <Nav />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pin" element={<Pin />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recipe" element={<Recipes />} />
        <Route path="/crear" element={<Crear />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
