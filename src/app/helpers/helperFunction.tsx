import { toast } from "react-toastify";

interface searchObj {
  [key: string]: any;
}
// getSearchParam
export function getSearchParameter(search: any) {
  const params: searchObj = {};
  search.forEach((value: any, key: any) => {
    params[key] = value;
  });
  return { ...params };
}

// Toast Message
export const showToastMessageSuccess = (message?: string) => {
  toast.success(message ? message : "Details submitted!", { className: "toast-message" });
};
export const showToastMessageFailure = (message?: string) => {
  toast.error(message ? message : "Something went wrong", { className: "toast-message" });
};

// Pascal Case
export const capitalizeFirstLetter = (string: any) => {
  if (!string) {
    return;
  }

  const words = string.split(" ");
  const pascalCase = words
    .map((word: any) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  return pascalCase;
};

// Random Num Generator
export const getRandomInt = (min: any, max: any) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Date to dd/mm/yy format
export const convert = (str: string): string => {
  let date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
};
