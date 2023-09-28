import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - createdAt.getTime();

  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (timeDifference < minute) {
    const secondsAgo = Math.floor(timeDifference / 1000);
    return `${secondsAgo} second${secondsAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);
    return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);
    return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < month) {
    const daysAgo = Math.floor(timeDifference / day);
    return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < year) {
    const monthsAgo = Math.floor(timeDifference / month);
    return `${monthsAgo} month${monthsAgo !== 1 ? "s" : ""} ago`;
  } else {
    const yearsAgo = Math.floor(timeDifference / year);
    return `${yearsAgo} year${yearsAgo !== 1 ? "s" : ""} ago`;
  }
};

export const formatNumberWithExtension = (inputNumber: number): string => {
  let formattedNumber: string;
  let divisor: number;

  if (inputNumber >= 1000000) {
    formattedNumber = (inputNumber / 1000000).toFixed(1);
    divisor = 1000000;
  } else if (inputNumber >= 1000) {
    formattedNumber = (inputNumber / 1000).toFixed(1);
    divisor = 1000;
  } else {
    formattedNumber = inputNumber.toString();
    divisor = 1;
  }

  // Remove trailing '.0' if present
  if (formattedNumber.endsWith(".0")) {
    formattedNumber = formattedNumber.slice(0, -2);
  }

  return formattedNumber + (divisor === 1 ? "" : divisor === 1000 ? "K" : "M");
};