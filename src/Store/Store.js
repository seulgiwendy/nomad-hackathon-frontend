import { types, getEnv } from "mobx-state-tree";

import Doc from "./Doc";
import Verify from "./Verify";
import Credential from "./Credential";

const Store = types
  .model("Store", {
    docs: types.optional(types.array(Doc), []),
    verify: types.optional(Verify, {}),
    query: types.optional(types.string, ""),
    credential: types.optional(Credential, {})
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

    setCredential(data) {
      self.credential = data;

      window.AWS.config.update({
        accessKeyId: data.accessKey,
        secretAccessKey: data.secretKey
      });
    }
  }));

export default Store;
