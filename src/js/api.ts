import {Data} from "./types";

interface ApiFunc {
  getData: () => Data;
}

export const createAPI = (data: string): ApiFunc => {
  const api = {
    getData: ():Data => {
      return JSON.parse(data);
    }
  };

  return api;
};
