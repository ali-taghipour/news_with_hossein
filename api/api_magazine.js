import {getAxiosInstanceApi, getAxiosInstanceJsonServer} from "./api";

export const listAllMagazines = (callback) => {
    getAxiosInstanceApi().get("magazines")
      .then(response => {
        const data = response.data;
        callback(true, data);
      }).catch(error => {
      callback(false, error);
    })
  };
  
  export const getMagazine = (id,callback) => {
    getAxiosInstanceApi().get("magazines/" + id)
      .then(response => {
        const data = response.data;
        callback(true, data);
      }).catch(error => {
      callback(false, error);
    })
  };
