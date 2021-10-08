import axios from "axios";
import { url } from "../../Utils/url";
// import { setData } from "../../utils/localStorage";
import {
  LOG_FAILURE,
  LOG_REQUEST,
  LOG_SUCCESS,
  REG_FAILURE,
  REG_REQUEST,
  REG_SUCCESS,
  OUT_FAILURE,
  OUT_REQUEST,
  OUT_SUCCESS,
} from "./actionTypes";

export const logReq = () => {
  return { type: LOG_REQUEST };
};
export const logSuccess = (data) => {
  return { type: LOG_SUCCESS, payload: data };
};
export const logFail = (err) => {
  return {
    type: LOG_FAILURE,
    payload: err,
  };
};

export const regReq = () => {
  return { type: REG_REQUEST };
};
export const regSuccess = (data) => {
  return { type: REG_SUCCESS, payload: data };
};

// export const postSuccess = (data) => {
//   return { type: POST_SUCCESS, payload: data };
// };
export const regFail = (err) => {
  return {
    type: REG_FAILURE,
    payload: err,
  };
};

export const outReq = () => {
  return { type: OUT_REQUEST };
};
export const outSuccess = (data) => {
  return { type: OUT_SUCCESS, payload: data };
};
export const outFail = (err) => {
  return {
    type: OUT_FAILURE,
    payload: err,
  };
};

export const outUser = (data) => (dispatch) => {
  dispatch(outReq());

  try {
    dispatch(outSuccess(data));
  } catch (err) {
    dispatch(outFail(err));
  }
};

export const logUser = (data) => (dispatch) => {
  dispatch(logReq());
  axios
    .post(`${url}/users/login`, data)
    .then(({ data }) => {

      return dispatch(logSuccess(data));
    })
    .catch((err) => dispatch(logFail(err)));
};

export const regUser = (data) => (dispatch) => {
  dispatch(regReq());
  axios
    .post(`${url}/users/register`, data)
    .then(({ data }) => {
      return dispatch(regSuccess(data));
    })
    .catch((err) => dispatch(regFail(err)));
};
