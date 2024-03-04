type productProps={
    name : string;
    id : string;
    image : string;
    price : number;
    stock : number;
    handler : ()=>void;
};

import { FaPlus } from "react-icons/fa";
const Card = ({name,id,image,price,stock,handler}:productProps) => {
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>
      <div>
        <button onClick={()=>handler()}><FaPlus/></button>
      </div>
    </div>
  );
}

export default Card;
