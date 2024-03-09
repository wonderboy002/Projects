import { useState } from "react";
const Shipping = () => {

  //creating state for shipping form
  const [shippinInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  function handleChange(e: any) {
    setShippingInfo(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <div className="shipping">
    
      <h1>Shipping Address</h1>
      <form>
        <input type="text" placeholder="address" name="address" value={shippinInfo.address} required onChange={handleChange} />
        <input type="text" placeholder="city" name="city" value={shippinInfo.city} required onChange={handleChange} />
        <input type="text" placeholder="state" name="state" value={shippinInfo.state} required onChange={handleChange} />
        <input type="text" placeholder="pincode" name="pincode" value={shippinInfo.pincode} required onChange={handleChange} />
        <select name="country" id="country">
          <option value="">Select a country</option>
          <option value="US">USA</option>
          <option value="UK">Britain</option>
          <option value="Japan">Japan</option>
        </select>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Shipping;
