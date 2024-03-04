import { useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import CartItem from "../Components/CartItem";

const cartItems = [
  {
    id : "adidas",
    name : "Gta V",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfmdwFO50d0FUcXq_Q20d_PNJQ9PSNxDJGw&usqp=CAU",
    price : "₹2000",
    quantity : 4,
    stock : 4,

  },
  {
    id : "adidas",
    name : "Gta V",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfmdwFO50d0FUcXq_Q20d_PNJQ9PSNxDJGw&usqp=CAU",
    price : "₹2000",
    quantity : 4,
    stock : 4,

  },
  {
    id : "adidas",
    name : "Gta V",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfmdwFO50d0FUcXq_Q20d_PNJQ9PSNxDJGw&usqp=CAU",
    price : "₹2000",
    quantity : 4,
    stock : 4,

  },
]
const total = 4000;
const tax = Math.round(total * 0.17);
const shippingCharge = 150;
const discount = 400;
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValid,setIsValid]=useState<boolean>(true);
  useEffect(()=>{

    const timeId=setTimeout(()=>{
       
     if (Math.random()>0.5) setIsValid(true);
     else setIsValid(false);
    },1000)

    return ()=>{
      clearTimeout(timeId);
    }
     
  },[couponCode])
  return (
    <div className="cartPage">
      <main className="cart-item-container">
        {
          cartItems.map((item,index)=>(
            <CartItem key={index} cartItem={item}/>
          ))
        }
      </main>
      <aside>
        <p>Subtotal : ₹{total}</p>
        <p>Shipping Charges : ₹{shippingCharge}</p>
        <p>Tax : ₹{tax}</p>
        <p>Discount : <em>
          ₹{discount}
        </em></p>
        <p>Total : ₹<b>{total + tax + shippingCharge - discount}</b></p>
        {/* {coupon code input } */}
        <input type="text" placeholder="Enter Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
        {
          couponCode && (
            isValid?(<span className="green">You got ₹{discount} off using Coupon Code {couponCode}</span>):(<span className="red">Invalid Coupon Code <MdError/></span>)
          )
        }
      </aside>
    </div>
  );
}

export default Cart;
