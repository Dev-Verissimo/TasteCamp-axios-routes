import { BrowserRouter, Routes, Route } from "react-router-dom";

import Receita from "./Receita";
import Receitas from "./Receitas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Receitas />}></Route>
        <Route path="/receita/:id" element={<Receita />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
