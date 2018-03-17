import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <NavLink to="/">로그인</NavLink>
    <NavLink to="/signup">회원가입</NavLink>
  </header>
);

export default Header;
