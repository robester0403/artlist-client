const { point } = require("@turf/helpers");
const distance = require("@turf/distance").default;

export function getCurrentDate() {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  return Number(`${year}${month}${date}`);
}

export function getDistance(userlat, userlong, eventlat, eventlong) {
  const from = point([eventlat, eventlong]);
  const to = point([userlat, userlong]);
  const options = { units: "kilometers" };
  const num = distance(from, to, options);
  const result = Number(num.toFixed(3));
  return result;
}

export function getDateFormat(array) {
  const date = array.date.split("T");
  const arrayDate = date[0];
  return arrayDate;
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
