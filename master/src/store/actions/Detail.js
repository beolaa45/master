import * as actionTypes from "./actionTypes";
import axios from "../../api/baseApi";

export const detailStart = () => {
  return {
    type: actionTypes.FETCH_DETAIL_START,
  };
};

export const detailSuccess = (data) => {
  return {
    type: actionTypes.FETCH_DETAIL_SUCCESS,
    data,
  };
};

export const detailFail = (error) => {
  return {
    type: actionTypes.FETCH_DETAIL_FAIL,
    error,
  };
};

export const detaiOnChangeQuanlity = (quanlity) => {
  return {
    type: actionTypes.FETCH_DETAIL_ON_CHANGE_QUANLITY,
    quanlity,
  };
};

export const detailPlusQuanlity = () => {
  return {
    type: actionTypes.FETCH_DETAIL_PLUS_QUANLITY,
  };
};

export const detailMiunsQuanlity = () => {
  return {
    type: actionTypes.FETCH_DETAIL_MIUNS_QUANLITY,
  };
};
export const detailInit = (id) => {
  return (dispatch) => {
    dispatch(detailStart());
    axios
      .get("/products/" + id)
      .then((data) => dispatch(detailSuccess(data)))
      .catch((error) => dispatch(detailFail(error)));
  };
};
