import service  from "../../../services/axios";

export const login = (data) =>
  new Promise((resolve, reject) => {
  service({
    url: 'user/login',
    method: "POST",
    data
  })
    .then(response => {
      resolve(response);
    })
    .catch(error => {
      reject(error);
    });
  });

export const getUsers = (params) => 
new Promise((resolve, reject) => {
  service({
    url: 'users',
    method: "GET",
    params
  })
    .then(response => {
      resolve(response);
    })
    .catch(error => {
      reject(error);
    });
  });
