import { types } from "mobx-state-tree";

const Doc = types.model("Doc", {
  title: types.optional(types.string, ""),
  duedate: types.optional(types.string, ""),
  urgent: types.optional(types.boolean, false),
  filesrc: types.optional(types.string, ""),
  registeredTime: types.optional(types.string, "")
});

export default Doc;
