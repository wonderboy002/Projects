import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
type carItemProps = {
    cartItem: any
}

const CartItem = ({ cartItem }: carItemProps) => {
    const { id, name, image, price, quantity, stock } = cartItem;
    return (
        <div className="cart-item">
            <div className="image">
                <img src={image}></img>
            </div>
            <article className="name-price">

                <Link to={`products/${id}`}>{name}</Link>
                <b>{price}</b>
            </article>


            <div className="quantity">
                <button className="minus-btn">-</button>
                <span>{quantity}</span>
                <button className="plus-btn">+</button>
            </div>
            <button className="deleteItem-btn"><MdDelete /></button>
        </div>
    );
}

export default CartItem;
