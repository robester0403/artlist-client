const { point } = require("@turf/helpers");
const distance = require("@turf/distance").default;

export function getCurrentDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedDate = yyyy + "-" + mm + "-" + dd;
  const numberedDate = Number(`${yyyy}${mm}${dd}`);
  return numberedDate;
}

export function getDistance(userlat, userlong, eventlat, eventlong) {
  const from = point([eventlat, eventlong]);
  const to = point([userlat, userlong]);
  const options = { units: "kilometers" };
  const num = distance(from, to, options);
  const result = Number(num.toFixed(3));
  return result;
}

export function getDateFormat(string) {
  const date = string.split("T");
  const eventDate = date[0];
  return eventDate;
}

export function getTimeFormat(string) {
  const eventTime = string.substring(11, 16);
  return eventTime;
}

export function dateToNum(string) {
  const result = string.split("-").join("");
  return Number(result);
}

export function getEventsSorted(event1, event2) {
  if (event1.dateNum < event2.dateNum) return -1;
  if (event1.dateNum > event2.dateNum) return 1;
  if (event1.distance > event2.distance) return 1;
  if (event1.distance < event2.distance) return -1;
}

export function getShortDescription(string) {
  const descriptionArr = string.split(" ");

  const shortenedArr = descriptionArr.slice(0, 20);
  const dots = "...";
  const shortenedString = shortenedArr.join(" ");
  const result = [...shortenedString, dots];
  return result.join("");
}
