import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <NavLink
                    to="/navlink"
                    className={(isActive) =>
                        isActive ? styles.activeLink : styles.link
                    }
                >
                    NavLink
                </NavLink>
            </li>
        </ul>
    );
}
