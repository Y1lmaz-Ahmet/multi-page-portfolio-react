import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const navLinks = [
  { path: "/", name: "Home", exact: true },
  { path: "/about", name: "About" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
  { path: "/cv", name: "Cv" },
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              end={link.exact}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
