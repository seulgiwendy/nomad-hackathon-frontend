import { types } from "mobx-state-tree";

import Docs from "./Docs";
import Verify from "./Verify";

const Store = types
  .model("Store", {
    docs: types.optional(Docs, {}),
    verify: types.optional(Verify, {}),
    query: types.optional(types.string, "")
  })
  .actions(self => ({
    setDocs(data) {
      self.docs = data;
    },

    setVerify(data) {
      self.verify = data;
    },

    setQuery(str) {
      console.log(str);
      self.query = str;
    }
  }));

export default Store;
