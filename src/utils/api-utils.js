const GEOAPIFY_KEY = process.env.REACT_APP_GEOAPIFY_KEY;
const GEOAPIFY_URL = "https://api.geoapify.com/v1/geocode/search?text=";
const API_URL = "http://localhost:8080/api";

export const getEvents = () => API_URL + "/events";
export const getEvent = (id) => API_URL + "/events/" + id;
export const getOrganizationEvents = (id) =>
  API_URL + "/events/organization/" + id;
export const getSingleOrganization = (id) => API_URL + "/organizations/" + id;
export const getCoord = (address) =>
  GEOAPIFY_URL + address + `&apiKey=${GEOAPIFY_KEY}`;
