import axios from "axios";
import { GET_CONTACTS } from "./types";

export const getMangas = () => (dispatch) => {
  axios.get("/listMangas").then((res) => {
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  });
};
export const addManga = (newManga) => (dispatch) => {
  axios.post("/addManga", newManga).then((res) => {
    dispatch(getMangas());
  });
};
export const deleteManga = (id) => (dispatch) => {
  axios.delete(`/delete/${id}`).then((res) => {
    dispatch(getMangas());
  });
};
export const updateManga = (id, updatedManga) => (dispatch) => {
  axios.put(`/update/${id}`, updatedManga).then((res) => {
    dispatch(getMangas());
  });
};