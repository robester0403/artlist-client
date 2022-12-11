const GEOAPIFY_KEY = process.env.REACT_APP_GEOAPIFY_KEY;
const GEOAPIFY_URL = "https://api.geoapify.com/v1/geocode/search?text=";
const API_URL = "http://localhost:8080/api";

export const getEvents = () => API_URL + "/events";
export const getCoord = (address) =>
  GEOAPIFY_URL + address + `&apiKey=${GEOAPIFY_KEY}`;
