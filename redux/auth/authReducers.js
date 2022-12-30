import {
  SUCCESS_AUTH,
  SET_USER,
  SET_TEMPID,
  SET_SORT,
  SET_EMAIL,
} from "./authTypes";

const initialState = {
  auth: null,
  user: null,
  id_temp: null,
  sort: "Reservations",
  email_temp: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_TEMPID:
      return {
        ...state,
        id_temp: action.payload,
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email_temp: action.payload,
      };
    default:
      return state;
  }
};
export default authReducers;
