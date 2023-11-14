import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../utils/products";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        mypromise.then((response) => {
            const foundItem = response.find((product) => product.id === parseInt(id, 10)); // Buscar por id en lugar de type
            setItem(foundItem);
        });
    }, [id]);

    return (
        <div>
            {item ? (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    {}
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};
