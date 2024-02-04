import moment from "moment";

const TRAD_TO_SMART_YEAR = {
  2020: "a",
  2021: "b",
  2022: "c",
  2023: "d",
  2024: "e",
  2025: "f",
  2026: "g",
  2027: "h",
  2028: "i",
  2029: "j",
  2030: "k",
  2031: "m", // l is easily confused with 1
  2032: "n",
  2033: "p", // o is easily confused with 0
  2034: "q",
  2035: "r",
  2036: "s",
  2037: "t",
  2038: "u",
  2039: "v",
  2040: "w",
  2041: "x",
  2042: "y", // z is easily confused with 2
};

const SMART_TO_TRAD_YEAR = {};

for (const [trad, smart] of Object.entries(TRAD_TO_SMART_YEAR)) {
  SMART_TO_TRAD_YEAR[smart] = trad;
}

export const tradtoSmart = (s: string): string => {
  const date = moment(s)

  const year = TRAD_TO_SMART_YEAR[date.year()];

  let week = date.isoWeek();
  if (week > 50 && date.month() === 0) {
    week = 0;
  }

  const day = date.isoWeekday();

  return `${week}${year}${day}`;
}

export const smartToTrad = (s: string) => {
  let [_, week, year, day] = /(\d+)([a-z])([1-7])/.exec(s) || [];

  const tradYear = SMART_TO_TRAD_YEAR[year];

  let date = moment();

  if (week === "0") {
    date = moment(`${tradYear}-01-01`) // why does moment work like this?
    week = "52";
  }

  date.year(tradYear)
  date.isoWeek(parseInt(week));
  date.isoWeekday(parseInt(day));

  return date.format("YYYY-MM-DD");
}

export const transform = (s: string) => {
  if (/\d+-\d+\d+/.test(s)) {
    return tradtoSmart(s);
  } else if (/\d+[a-z][1-7]/.test(s)) {
    return smartToTrad(s);
  } else {
    throw "Invalid input";
  }
}

