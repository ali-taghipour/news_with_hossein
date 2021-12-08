import {getAxiosInstanceApi, getAxiosInstanceJsonServer} from "./api";





// export const specialListHome = (specialHome,callback) => {
//   getAxiosInstanceApi().post("getFoodList",{specialHome})
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };
// export const pizzaList = (pizza,callback) => {
//   getAxiosInstanceApi().post("getFoodList",{pizza})
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };
// export const burgerList = (burger,callback) => {
//   getAxiosInstanceApi().post("getFoodList",{burger})
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };
// export const discountList = (discount,callback) => {
//   getAxiosInstanceApi().post("getFoodList",{discount})
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };
// export const drinkList = (drink,callback) => {
//   getAxiosInstanceApi().post("getFoodList",{drink})
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };

// export const updateBasket = (basket,callback) => {
//   getAxiosInstanceApi().post("updateBasket",{basket})
//     .then(response => {
//       const data = response.data; 
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };
// export const getBasket = (callback) => {
//   getAxiosInstanceApi().get("getBasket")
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   })
// };
// export const checkoutBasket = (data, callback) => {
//   getAxiosInstanceApi().post("checkoutBasket",data)
//     .then(response => {
//       const data = response.data;
//       callback(data,true );
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   });
// };
// export const getDetailPayment = (paymentCode, callback) => {
//   getAxiosInstanceApi().get("getDetailPayment/"+paymentCode)
//     .then(response => {
//       const data = response.data;
//       callback(true, data);
//     }).catch(error => {
//     console.log(error);
//     callback(false, error);
//   });
// };