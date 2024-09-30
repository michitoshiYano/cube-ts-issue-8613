import cubejs from "@cubejs-client/core";
import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.API_URL;
const CUBEJS_TOKEN = process.env.CUBEJS_TOKEN;
const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: `${API_URL}/cubejs-api/v1`
});

console.log("cubejs");
console.log(cubejs);
