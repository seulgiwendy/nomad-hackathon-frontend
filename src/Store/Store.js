import { types, getEnv } from "mobx-state-tree";

import Doc from "./Doc";
import Verify from "./Verify";

const Store = types
  .model("Store", {
    docs: types.optional(types.array(Doc), []),
    verify: types.optional(Verify, {}),
    query: types.optional(types.string, "")
  })
  .views(self => ({
    get pbFetch() {
      return getEnv(self).pbFetch;
    }
  }))
  .actions(self => ({
    setDocs(data) {
      self.docs = data;
    },

    setVerify(data) {
      self.verify = data;
    },

    setQuery({ target: { value } }) {
      self.query = value;
    },

    setCredential({ accessKey, secretKey }) {
      window.AWS.config.update({
        accessKeyId: accessKey,
        secretAccessKey: secretKey
      });
    }
  }));

export default Store;
