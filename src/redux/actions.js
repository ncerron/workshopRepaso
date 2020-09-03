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

let API_URL;

if (process.env.NODE_ENV == "production") {
  API_URL = process.env.API_URL;
} else {
  API_URL = "http://localhost:3000";
}

const clienteAxios = axios.create({
  baseURL: API_URL,
});

export const fetchProperties = () => (dispatch) =>
  clienteAxios.get("/api/all").then((res) => {
    dispatch(receiveProperties(res.data));
  });

export const fetchByName = (data) => (dispatch) => {
  clienteAxios.get(`/api/all/name/${data}`).then((res) => {
    dispatch(receiveProperties(res.data));
  });
};

export const fetchByPrice = (data) => (dispatch) =>
  clienteAxios.get(`/api/all/price/${data}`).then((res) => {
    dispatch(receiveProperties(res.data));
  });

export const fetchSearch = (data) => (dispatch) =>
  clienteAxios.get(`/api/all/${data}`).then((res) => {
    dispatch(search(res.data));
  });

export const fetchCreate = (property) => (dispatch) =>
  clienteAxios.post("/api/create", property).then((res) => {
    dispatch(addProperty(res.data));
  });

export const fetchProperty = (id) => (dispatch) =>
  clienteAxios.get(`/api/property/${id}`).then((res) => {
    dispatch(selectedProperty(res.data));
  });

export const fetchDelete = (id) => (dispatch) =>
  clienteAxios.get(`/api/delete/${id}`).then((res) => {
    dispatch(deleteProperty(res.data));
  });

export const fetchUpdate = (id, property) => (dispatch) =>
  clienteAxios
    .put(`/api/update/${id}`, property)
    .then((res) => dispatch(updateProperty(res.data)));
