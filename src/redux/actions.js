import axios from "axios";

const receiveProperties = properties => ({
  type: "RECEIVE_PROPERTIES",
  properties
});

export const fetchProperties = () => dispatch =>
  axios.get("/api/all").then(res => {
    dispatch(receiveProperties(res.data));
  });

export const fetchByName = () => dispatch =>
  axios.get("/api/all/name").then(res => {
    dispatch(receiveProperties(res.data));
  });

export const fetchByPrice = () => dispatch =>
  axios.get("/api/all/price").then(res => {
    dispatch(receiveProperties(res.data));
  });

export const fetchByPriceA = () => dispatch =>
  axios.get("/api/all/priceA").then(res => {
    dispatch(receiveProperties(res.data));
  });

  export const fetchSearch = data => dispatch =>
  axios.get(`/api/all/${data}`).then(res => {
    dispatch(receiveProperties(res.data));
  });
