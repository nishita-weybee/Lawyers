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
  toast.success(message ? message : "Details submitted successfully!", {});
};
export const showToastMessageFailure = (message?: string) => {
  toast.error(message ? message : "Something went wrong", {});
};
