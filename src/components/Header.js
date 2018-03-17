import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => (
  <header className="header">
    <NavLink to="/upload">업로드</NavLink>
    <NavLink to="/">로그인 / 회원가입</NavLink>
  </header>
);

export default Header;
