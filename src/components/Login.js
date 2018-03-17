import React from "react";
import { withState } from "recompose";

const enhance = withState("id", "setId", "");

const Login = enhance(({ id, setId }) => (
  <div>
    <input
      type="text"
      value={id}
      onChange={({ target: { value } }) => setId(() => value)}
    />
  </div>
));

export default Login;
