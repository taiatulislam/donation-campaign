import { NavLink } from "react-router-dom";
import logo from '../../assets/images/Logo.png';

const Navbar = () => {

    return (
        <div className="flex justify-between items-center pt-10 max-w-7xl mx-auto" >
            <div>
                <img src={logo} alt="Logo" className="h-[72px]" />
            </div>
            <div className="flex gap-7 z-[1]">
                <NavLink className={({ isActive }) => isActive ? "text-[#FF444A] font-semibold text-lg border-b-2 border-[#FF444A]" : "text-lg font-semibold"} to="/home"> Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-[#FF444A] font-semibold text-lg border-b-2 border-[#FF444A]" : "text-lg font-semibold"} to="/donation">Donation</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-[#FF444A] font-semibold text-lg border-b-2 border-[#FF444A]" : "text-lg font-semibold"} to="/statistics">Statistics</NavLink>
            </div>
        </div >
    );
};

export default Navbar;