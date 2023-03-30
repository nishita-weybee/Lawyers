import { toast } from "react-toastify";

interface searchObj {
  [key: string]: any;
}

export function getSearchParameter(search: any) {
  const params: searchObj = {};
  search.forEach((value: any, key: any) => {
    params[key] = value;
  });
  return { ...params };
}

export const showToastMessageSuccess = (message?: string) => {
  toast.success(message ? message : "Details submitted!", {});
};
export const showToastMessageFailure = (message?: string) => {
  toast.error(message ? message : "Something went wrong", {});
};

export const capitalizeFirstLetter = (string: any) => {
  const words = string.split(" ");
  const pascalCase = words
    .map((word: any) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  return pascalCase;
};

export const getRandomInt = (min: any, max: any) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
