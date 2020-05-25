import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const { cNav, cNavMenu, cNavMenuItem, cLink, cBrand } = classes;

type NavbarLink = {
  name: string;
  path: string;
  brand?: boolean;
};

interface INavbarProps {
  links: NavbarLink[];
}

const Navbar: React.FC<INavbarProps> = ({ links }) => {
  return (
    <div className={cNav}>
      <ul className={cNavMenu}>
        {links &&
          links.map(({ brand, path, name }, index) => (
            <li className={`${cNavMenuItem} ${brand && cBrand}`} key={index}>
              <Link className={cLink} to={path}>
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;
