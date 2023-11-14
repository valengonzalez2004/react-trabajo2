
import Imagen from "./Imagen";
import { useState } from 'react';
import "../../styles/cardItem.css"
import "../../styles/detailsItem.css"
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";

const CardItem = (props) => {
    const [hoveredID, setHoveredID] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredID(id);
    };

    const handleMouseLeave = () => {
        setHoveredID(null);
    };

    return (
        <div className="cardItem">
            <Imagen imagen={props.imagen} />
            <Description title={props.title} cantidad={props.cantidad} precio={props.precio} />
            <Link to={`/items/${props.id}`}>
                <div className="buttons">
                    <ButtonDetalles
                        onMouseEnter={() => handleMouseEnter(props.id)}
                        onMouseLeave={handleMouseLeave}
                    />
                    <ButtonAddCart />
                </div>
            </Link>
            {hoveredID && (
                <div className="productIDTooltip">
                    Product ID: {hoveredID}
                </div>
            )}
        </div>
    );
}

export default CardItem;


