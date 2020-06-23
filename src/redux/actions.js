import axios from "axios";

const receiveProperties = (properties) => ({
  type: "RECEIVE_PROPERTIES",
  properties,
});

const addProperty = (property) => ({
  type: "ADD_PROPERTY",
  property,
});

const search = (properties) => ({
  type: "SEARCH_PROPERTIES",
  properties,
});

const selectedProperty = (property) => ({
  type: "SELECTED_PROPERTY",
  property,
});

const deleteProperty = (property) => ({
  type: "DELETE_PROPERTY",
  property,
});

const updateProperty = (property) => ({
  type: "UPDATE_PROPERTY",
  property,
});
////////////////////////////////////////////////

export const fetchProperties = () => (dispatch) =>
  axios.get("/api/all").then((res) => {
    dispatch(receiveProperties(res.data));
  });

export const fetchByName = (data) => (dispatch) => {
  axios.get(`/api/all/name/${data}`).then((res) => {
    dispatch(receiveProperties(res.data));
  });
};

export const fetchByPrice = (data) => (dispatch) =>
  axios.get(`/api/all/price/${data}`).then((res) => {
    dispatch(receiveProperties(res.data));
  });

export const fetchSearch = (data) => (dispatch) =>
  axios.get(`/api/all/${data}`).then((res) => {
    dispatch(search(res.data));
  });

export const fetchCreate = (property) => (dispatch) =>
  axios.post("/api/create", property).then((res) => {
    dispatch(addProperty(res.data));
  });

export const fetchProperty = (id) => (dispatch) =>
  axios.get(`/api/property/${id}`).then((res) => {
    dispatch(selectedProperty(res.data));
  });

export const fetchDelete = (id) => (dispatch) =>
  axios.get(`/api/delete/${id}`).then((res) => {
    dispatch(deleteProperty(res.data));
  });

export const fetchUpdate = (id, property) => (dispatch) =>
  axios
    .put(`/api/update/${id}`, property)
    .then((res) => dispatch(updateProperty(res.data)));
