import { devApiUrl, devKey } from "./functions-general";

<<<<<<< HEAD
=======

>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
export const queryData = (endpoint, method = "get", fd = {}) => {
  let url = devApiUrl + endpoint;
  let username = devKey;
  let password = "";
  let auth = btoa(`${username}:${password}`);
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic " + auth);
  myHeaders.append("Content-Type", "application/json");

<<<<<<< HEAD
=======

>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
  let options = {
    method,
    headers: myHeaders,
  };

<<<<<<< HEAD
=======

>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
  if (method !== "get") {
    options = {
      ...options,
      body: JSON.stringify(fd),
    };
  }

<<<<<<< HEAD
=======

>>>>>>> 2f67ab56d1ec6e4a7f5db4e8d4e4f763da8f0e3d
  const data = fetch(url, options).then((res) => res.json());
  return data;
};