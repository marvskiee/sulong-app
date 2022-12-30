import {
  SUCCESS_AUTH,
  SET_SORT,
  SET_USER,
  SET_TEMPID,
  SET_EMAIL,
} from "./authTypes";

export const successAuthStorage = (data) => {
  return {
    type: SUCCESS_AUTH,
    payload: data,
  };
};

export const successUserStorage = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};
export const setAuth = (data) => (dispatch) => {
  dispatch(successAuthStorage(data));
};

export const setUser = (data) => (dispatch) => {
  dispatch(successUserStorage(data));
};

export const setTempId = (data) => (dispatch) => {
  dispatch({ type: SET_TEMPID, payload: data });
};
export const setSort = (data) => (dispatch) => {
  dispatch({ type: SET_SORT, payload: data });
};

export const setEmail = (data) => (dispatch) => {
  dispatch({ type: SET_EMAIL, payload: data });
};
