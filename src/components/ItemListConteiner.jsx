import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../utils/products";

export const ItemListContainer = (props) => {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        mypromise.then((response) => {
            if (id === "discos") {
                const filterByCategory = response.filter((item) => item.type === "disco de vinilo");
                setItems(filterByCategory);
            } else if (id === "accesorio") {
                const filterByCategory = response.filter((item) => item.type === "accesorio");
                setItems(filterByCategory);
            } else {
                setItems(response);
            }
        });
    }, [id]);

    return (
        <div>
            {props.greeting}
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};
