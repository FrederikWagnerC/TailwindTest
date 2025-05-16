import coffee from "../../assets/coffee.svg";
import { NavbarStyled } from "./navbar.styled";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
import { Link } from "react-router-dom";
import { ShoppingCartComponent } from "../shoppingCart/ShoppingCart.component";
import { useState } from "react";
import { useCart } from "../../providers/cartProvider/cart.provider";

export const Navbar = () => {
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible((prev) => !prev);

    };
    return (
        <>
            <NavbarStyled>
                <div className="logo">
                    <Link to="/"><h1>Sunshine Coffee</h1></Link>
                    <img src={coffee} alt="Coffee Logo" />
                </div>
                <ul className="nav-links">
                    <li><p>Europa</p></li>
                    <li><img onClick={toggleCartVisibility} src={cart} alt="Cart" /></li>
                    <li><Link><img src={user} alt="User" /></Link></li>
                </ul>
                {isCartVisible && <div className="overlay" onClick={toggleCartVisibility}></div>}
                <div className={`cart${isCartVisible ? " open" : ""}`} onClick={e => e.stopPropagation()}>
                    <button className="close-cart" onClick={toggleCartVisibility}>X</button>
                    <ShoppingCartComponent />
                </div>
            </NavbarStyled>
        </>
    );
}