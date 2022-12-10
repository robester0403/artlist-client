const { point } = require("@turf/helpers");
const distance = require("@turf/distance").default;

export function getCurrentDate() {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const hours = new Date().getHours();
  return date + "/" + month + "/" + year + "  " + hours;
}

export function getDistance(userlat, userlong, eventlat, eventlong) {
  const from = point([eventlat, eventlong]);
  const to = point([userlat, userlong]);
  const options = { units: "kilometers" };
  const result = distance(from, to, options);
  return result;
}
