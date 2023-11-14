import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"
export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/items">Stereo Libre</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/items">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/disco de vinilo">Discos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/accesorio">Accesorios</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}