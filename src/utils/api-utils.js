const GEOAPIFY_KEY = process.env.REACT_APP_GEOAPIFY_KEY;
const GEOAPIFY_URL = "https://api.geoapify.com/v1/geocode/search?text=";

export const getCoord = (address) =>
  GEOAPIFY_URL + address + `&apiKey=${GEOAPIFY_KEY}`;
