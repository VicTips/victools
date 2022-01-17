import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Tables from "./pages/Tables";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculadora" element={<Calculator />} />
        <Route path="tablas" element={<Tables />} />
      </Route>
    </Routes>
  );
}

export default App;
