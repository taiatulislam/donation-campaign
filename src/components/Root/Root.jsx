import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";

const Root = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const routeHome = location.pathname + 'home';

    useEffect(() => {
        navigate(`${routeHome}`)
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;