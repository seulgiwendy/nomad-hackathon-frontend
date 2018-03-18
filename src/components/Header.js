import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import "./Header.css";

@inject(({ store }) => ({ store }))
@observer
export default class Header extends Component {
  render() {
    const { store } = this.props;

    return (
      <header className="header navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink to="/" className="navbar-brand">
              PrintBoard
            </NavLink>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/docs" id="header-items">
                  내 문서함
                </NavLink>
              </li>
              <li>
                <NavLink to="/upload" id="header-items">
                  업로드
                </NavLink>
              </li>
              <li>
                <NavLink to="/" id="header-items">
                  로그인 / 회원가입
                </NavLink>
              </li>
            </ul>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="search-box"
                  placeholder="search my docs..."
                  value={store.query}
                  onChange={store.setQuery}
                />
              </div>
              <Link className="btn btn-default" type="submit" to={"/docs"}>
                Search
              </Link>
            </form>
            {this.props.store.verify.USER_LOGINID}
          </div>
        </div>
      </header>
    );
  }
}
