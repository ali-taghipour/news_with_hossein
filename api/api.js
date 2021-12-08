import Axios from 'axios'

export const getAxiosInstanceJsonServer = () => {
  return Axios.create({
    baseURL: "http://abolfazlrajabi.ir/api/users/",
    headers: {
      API_KEY: "lsdkljfalksfjasdfkjlasfjklasdkfjsadjf"
    }
  });
};

export const getAxiosInstanceAuth = () => {
  return Axios.create({
    baseURL: "http://abolfazlrajabi.ir/api/users/",
    headers: {
      // API_KEY: "lsdkljfalksfjasdfkjlasfjklasdkfjsadjf"
    }
  });
};

export const getAxiosInstanceApi = () => {
  return Axios.create({
    baseURL: "http://abolfazlrajabi.ir/api/",
    headers: {
      'x-auth-token': localStorage.getItem("x-auth-token")
    }
  });
};

