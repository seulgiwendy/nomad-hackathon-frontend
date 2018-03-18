import { types } from "mobx-state-tree";

const Verify = types
  .model("Verify", {
    access_token: types.optional(types.string, ""),
    token_type: types.optional(types.string, ""),
    expires_in: types.optional(types.number, 0),
    scope: types.optional(types.string, ""),
    AUTHORITIES: types.optional(types.string, ""),
    USER_LOGINID: types.optional(types.string, ""),
    USER_UID: types.optional(types.number, 0),
    jti: types.optional(types.string, "")
  })
  .views(self => ({
    get isLogin() {
      return self.access_token !== "";
    }
  }));

export default Verify;
