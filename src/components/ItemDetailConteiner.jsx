import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../utils/products";
import "../components/ItemDetailContainer.css";

export const ItemDetailContainer = (props) => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const foundItem = products.find((product) => product.id === parseInt(id, 10));
        setItem(foundItem);
    }, [id]);

    return (
        <div className="item-detail-container">
            {item ? (
                <div className="item-details">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <div className="product-images">
                        <img src={item.imageProduct.firstImage} alt="Product Image 1" />
                    </div>
                    <p>Precio: ${item.price}</p>
                    <button onClick={() => alert("¡Producto añadido al carrito!")}>
                        Comprar
                    </button>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};
