import axios from "axios";

const receiveProperties = properties => ({
  type: "RECEIVE_PROPERTIES",
  properties
});

export const fetchProperties = () => dispatch =>
  axios.get("/api/all").then(res => {
    dispatch(receiveProperties(res.data));
  });
