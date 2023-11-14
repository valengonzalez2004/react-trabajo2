import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "./components/navbar";
import ContainerCardItems from "./components/components items/ContainerCardItems";
import { ItemDetailContainer } from "./components/ItemDetailConteiner";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContainerCardItems />} />
        <Route path="/category/:id" element={<ContainerCardItems />} />
        <Route path="/items/:id" element= {<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
