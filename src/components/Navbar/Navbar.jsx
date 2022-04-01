import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.wrapper}>
            <NavLink to="/profile"> Profile </NavLink>
            <NavLink to="/dialogs"> Dialogs </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/friends"> Friends </NavLink>
            <NavLink to="/users"> Users </NavLink>
        </div>
    );
};

export default Navbar;
