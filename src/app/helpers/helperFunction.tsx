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

  export const showToastMessageSuccess = () => {
    toast.success("Details Submitted Successfully!", {});
  };
  export const showToastMessageFailure = () => {
    toast.error("Something went wrong", {});
  };
  