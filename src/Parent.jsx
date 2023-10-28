import {Navbar} from "./Component/Navbar.jsx";
import {Outlet} from "react-router-dom";

export const Parent = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}