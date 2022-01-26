import moment from "moment";

function formatDate(date) {
  return moment(date).format("dddd Do MMMM YYYY");
}
export { formatDate };

function yearsSinceDate(date) {
  const numberOfYears = moment(date).startOf().fromNow();
  const parsedNumberOfYears = parseInt(numberOfYears);
  // console.log("ligne 9", numberOfYears);
  // console.log("ligne 10", parsedNumberOfYears);
  return parsedNumberOfYears;
}
export { yearsSinceDate };

function daysSinceDate(date) {
  const numberOfYearsForDay = moment(date).startOf().fromNow();
  // test Florian : console.log("ligne 19 ", moment(date));
  // test Florian :console.log("ligne 20 ", moment());
  const parsedNumberOfYearsForDay = parseInt(numberOfYearsForDay);
  const numberOfDay = Math.round(parsedNumberOfYearsForDay * 365.5 - 1);
  return numberOfDay;
}
export { daysSinceDate };

function getDayFromDate(date) {
  const specificDate = moment(date).format("dddd");
  console.log(specificDate);
  return specificDate;
}
export { getDayFromDate };

//console.log(formatDate());

/*function daysSinceDate(date) {
  console.log("ligne 17 ", moment(date));
  console.log("ligne 18 ", moment());
  const numberOfYearsForDay = moment(date).startOf().fromNow();
  const parsedNumberOfYearsForDay = parseInt(numberOfYearsForDay);
  const numberOfDay = Math.round(parsedNumberOfYearsForDay * 365.5);
  return numberOfDay;
}
export { daysSinceDate };*/
