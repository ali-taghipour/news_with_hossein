import {getAxiosInstanceApi, getAxiosInstanceAuth} from "./api";

export const loginApi = (user,callback) => {
  getAxiosInstanceAuth().post("login",user)
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error.response.data.message);
  })
};

export const getAccessToken = (refereshToken,callback) => {
  getAxiosInstanceAuth().post("login",refereshToken)
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error.response.data.message);
  })
};

export const logout = (token,callback) => {
  getAxiosInstanceAuth().post("login",token)
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error.response.data.message);
  })
};

export const registerApi = (user,callback) => {
  getAxiosInstanceAuth().post("register",user)
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error.response.data.message);
  })
};
export const updateUser = (id,user,callback) => {
  getAxiosInstanceApi().put(`updateUser/${id}`,user)
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error.response.data.message);
  })
};
export const getProfileRequest = (callback) => {
  getAxiosInstanceApi().get("getProfile")
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error.response.data.message);
  })
};

export const uploadUserPhoto = (image,callback) => {
  getAxiosInstanceApi().post('uploadUserPhoto',image)
    .then(response => {
      const data = response.data;
      callback(true, data);
    }).catch(error => {
    console.log(error);
    callback(false, error.response.data.message);
  })
};
