import { types } from "mobx-state-tree";

const Credential = types.model("Credential", {
  accessKey: types.optional(types.string, ""),
  secretKey: types.optional(types.string, "")
});

export default Credential;
