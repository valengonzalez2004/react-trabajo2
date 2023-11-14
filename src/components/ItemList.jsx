import React from "react";
import Item from "./Item";

const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
];

const App = () => {
    return (
        <div>
            <h1>Lista de elementos</h1>
            <ItemList items={items} />
        </div>
    );
};

export default App;
