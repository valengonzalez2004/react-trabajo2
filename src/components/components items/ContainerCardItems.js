import CardItem from "./CardItem";
import fetchSimulation from "../../utils/fetchSimulation";
import products from "../../utils/products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importa useParams

const ContainerCardItems = () => {
    const [datos, setDatos] = useState([]);
    const { id } = useParams(); // Obtiene el tipo de producto desde la URL

    useEffect(() => {
        fetchSimulation(products, 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
    }, [])

    // Filtra los productos según el tipo seleccionado en la URL
    const filteredProducts = id
      ? datos.filter((product) => product.type === id)
      : datos;

    return (
        <div className="containerCardItems">
            {filteredProducts.map((product) => ( 
                <CardItem
                    key={product.id}
                    image={product.imageProduct.firstImage}
                    title={product.title}
                    cantidad={product.stock}
                    precio={product.price}
                />
            ))}
        </div>
    )
}

export default ContainerCardItems;
