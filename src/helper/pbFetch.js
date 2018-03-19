import protocole from "../admin/protocole";

const pbFetch = (type, access_token = "") =>
  fetch(protocole[type].URL, {
    method: protocole[type].METHOD,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;utf8",
      Authorization: `Bearer ${access_token}`
    }
  }).then(data => data.json());

export default pbFetch;
