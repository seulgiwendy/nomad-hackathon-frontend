import { types } from "mobx-state-tree";

const Docs = types.model("Docs", {
  title: types.optional(types.string, ""),
  duedate: types.optional(types.string, ""),
  urgent: types.optional(types.boolean, false),
  fileSrc: types.optional(types.string, "")
});

export default Docs;
