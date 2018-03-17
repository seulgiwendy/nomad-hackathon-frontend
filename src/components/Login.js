import React from "react";
import { withState } from "recompose";

import "./Login.css";

const enhance = withState("id", "setId", "");

const Login = enhance(({ id, setId }) => (
  <div className="Login">
    <input
      type="text"
      value={id}
      onChange={({ target: { value } }) => setId(() => value)}
    />
  </div>
));

export default Login;
