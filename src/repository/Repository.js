import axios from "axios";
const baseDomain =
  "https://sponsor-tier-2-server.herokuapp.com/https://en.wikipedia.org/w";
const baseURL = `${baseDomain}/api.php`;
export default axios.create({
  baseURL,
  headers: { "Cache-Control": "no-cache", "Content-Type": "application/json" },
});
