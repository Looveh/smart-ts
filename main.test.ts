import { expect, test } from "bun:test";
import { transform } from "./main";

const cases = [
  ["2023-01-01", "0d7"],
  ["2023-01-02", "1d1"],
  ["2023-01-03", "1d2"],
  ["2023-01-04", "1d3"],
  ["2023-01-05", "1d4"],
  ["2023-01-06", "1d5"],
  ["2023-01-07", "1d6"],
  ["2023-01-08", "1d7"],
  ["2023-01-09", "2d1"],
  ["2023-01-10", "2d2"],
  ["2023-01-11", "2d3"],
  ["2023-01-12", "2d4"],
  ["2023-01-13", "2d5"],
  ["2023-01-14", "2d6"],
  ["2023-01-15", "2d7"],
  ["2023-01-16", "3d1"],
  ["2023-01-17", "3d2"],
  ["2023-01-18", "3d3"],
  ["2023-01-19", "3d4"],
  ["2023-01-20", "3d5"],
  ["2023-01-21", "3d6"],
  ["2023-01-22", "3d7"],
  ["2023-01-23", "4d1"],
  ["2023-01-24", "4d2"],
  ["2023-01-25", "4d3"],
  ["2023-01-26", "4d4"],
  ["2023-01-27", "4d5"],
  ["2023-01-28", "4d6"],
  ["2023-01-29", "4d7"],
  ["2023-01-30", "5d1"],
  ["2023-01-31", "5d2"],
  ["2023-02-01", "5d3"],
  ["2023-02-02", "5d4"],
  ["2023-02-03", "5d5"],
  ["2023-02-04", "5d6"],
  ["2023-02-05", "5d7"],
  ["2023-02-06", "6d1"],
  ["2023-02-07", "6d2"],
  ["2023-02-08", "6d3"],
  ["2023-02-09", "6d4"],
  ["2023-02-10", "6d5"],
  ["2023-02-11", "6d6"],
  ["2023-02-12", "6d7"],
  ["2023-02-13", "7d1"],
  ["2023-02-14", "7d2"],
  ["2023-02-15", "7d3"],
  ["2023-02-16", "7d4"],
  ["2023-02-17", "7d5"],
  ["2023-02-18", "7d6"],
  ["2023-02-19", "7d7"],
  ["2023-02-20", "8d1"],
  ["2023-02-21", "8d2"],
  ["2023-02-22", "8d3"],
  ["2023-02-23", "8d4"],
  ["2023-02-24", "8d5"],
  ["2023-02-25", "8d6"],
  ["2023-02-26", "8d7"],
  ["2023-02-27", "9d1"],
  ["2023-02-28", "9d2"],
  ["2023-03-01", "9d3"],
  ["2023-03-02", "9d4"],
  ["2023-03-03", "9d5"],
  ["2023-03-04", "9d6"],
  ["2023-03-05", "9d7"],
  ["2023-03-06", "10d1"],
  ["2023-03-07", "10d2"],
  ["2023-03-08", "10d3"],
  ["2023-03-09", "10d4"],
  ["2023-03-10", "10d5"],
  ["2023-03-11", "10d6"],
  ["2023-03-12", "10d7"],
  ["2023-03-13", "11d1"],
  ["2023-03-14", "11d2"],
  ["2023-12-25", "52d1"],
  ["2023-12-26", "52d2"],
  ["2023-12-27", "52d3"],
  ["2023-12-28", "52d4"],
  ["2023-12-29", "52d5"],
  ["2023-12-30", "52d6"],
  ["2023-12-31", "52d7"],
  ["2024-01-01", "1e1"],
  ["2024-01-02", "1e2"],
  ["2024-01-03", "1e3"],
  ["2024-01-04", "1e4"],
  ["2024-01-05", "1e5"],
  ["2024-01-06", "1e6"],
  ["2024-01-07", "1e7"],
  ["2024-01-08", "2e1"],
  ["2024-01-09", "2e2"],
  ["2024-01-10", "2e3"],
  ["2024-01-11", "2e4"],
  ["2024-01-12", "2e5"],
  ["2024-01-13", "2e6"],
  ["2024-01-14", "2e7"],
  ["2024-01-15", "3e1"],
  ["2024-01-16", "3e2"],
  ["2024-01-17", "3e3"],
  ["2024-01-18", "3e4"],
  ["2024-01-19", "3e5"],
  ["2024-01-20", "3e6"],
  ["2024-01-21", "3e7"],
  ["2024-01-22", "4e1"],
  ["2024-01-23", "4e2"],
  ["2024-01-24", "4e3"],
  ["2024-01-25", "4e4"],
  ["2024-01-26", "4e5"],
  ["2024-01-27", "4e6"],
  ["2024-01-28", "4e7"],
  ["2024-01-29", "5e1"],
  ["2024-01-30", "5e2"],
  ["2024-01-31", "5e3"],
  ["2024-02-01", "5e4"],
  ["2024-02-02", "5e5"],
  ["2024-02-03", "5e6"],
  ["2024-02-04", "5e7"],
  ["2024-02-05", "6e1"],
  ["2024-02-06", "6e2"],
];

test.each(cases)(`transform smart -> dumb [%s, %s]`, (a: string, b: string) => {
  expect(transform(b)).toBe(a);
});

test.each(cases)(`transform dumb -> smart [%s, %s]`, (a: string, b: string) => {
  expect(transform(a)).toBe(b);
});
