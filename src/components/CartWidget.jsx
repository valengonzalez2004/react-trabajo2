import carrito from "../images/carrito.png";
import { Link } from "react-router-dom"

export const CartWidget = () => {
    const imagenStyle = {
        width: "40px",
        height: "30px", 
    };

    return (
        <div>
            <Link to="/items"><img src={carrito} alt="Carrito" style={imagenStyle} /></Link>
            <div>0</div>
        </div>
    );
};
