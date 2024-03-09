import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { TbShoppingCartFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
const user = {
    _id: "adsd", role: "Admin"
}
function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <nav className="NavBar">

            <Link onClick={()=>setIsOpen(false)} to="/"><IoMdHome /></Link>
            <Link onClick={()=>setIsOpen(false)} to="/Cart"><TbShoppingCartFilled /></Link>
            <Link onClick={()=>setIsOpen(false)} to="/Search"><FaSearch /></Link>
            {
                user?._id ? (
                    <>
                        <button onClick={()=>setIsOpen((prev)=>!prev)}><FaUserAlt>
                        </FaUserAlt>
                        </button>
                        <dialog open={isOpen}>
                            <div>
                                {
                                    user.role === "Admin" && (
                                        <Link onClick={()=>setIsOpen(false)} to="/admin/dashboard">Dashboard</Link>
                                    )

                                }
                                <Link onClick={()=>setIsOpen(false)} to="/orders">Orders</Link>
                                <Link to="/Login"><FaSignOutAlt></FaSignOutAlt></Link>
                            </div>
                        </dialog>
                    </>
                ) : (
                    <FaSignInAlt>

                    </FaSignInAlt>
                )
            }

        </nav>
    );
}

export default Header;
