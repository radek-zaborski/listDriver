import "./DataApi.scss";
import axios from "axios";
import fetchToCurl from "fetch-to-curl";

async function DataApi() {
  const adress = "https://sandbox-api.uber.com/1.2";
  const app = "Pw4NX7UuqKxQHjugOd59meMjNMbCljm8";
  const key = "A-MdRU_MFUQTPi7HPe5xkj43Zl6lw0emZBOwbBIx";

  const options = {
    headers: {
      Authorization: key,
    },
    method: "get",
  };
  const response = fetchToCurl(adress, options);

  console.log(response);

  await fetch(response).then((res) => console.log(res));
}

export default DataApi;
