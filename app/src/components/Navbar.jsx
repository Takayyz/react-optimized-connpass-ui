import React from "react";
import "./development.css";
import logo from "../logo.svg";
import { SearchField } from "./organisms/SearchField";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <img src={logo} className="navbar-logo" alt="logo" />
      <SearchField />
    </div>
  );
};
