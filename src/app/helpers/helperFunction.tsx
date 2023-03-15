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