import { GET_CONTACTS } from "../actions/types";

const initialstate = [];
const MangasReducer = (state = { listMangas: [] }, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { listMangas: action.payload };
    default:
      return state;
  }
};
export default MangasReducer;