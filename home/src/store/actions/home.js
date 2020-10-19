import * as actionTypes from "./actionTypes";
import axios from "../../api/baseApi";
export const homeStart = () => {
  return {
    type: actionTypes.FETCH_HOME_START,
  };
};

export const homeSuccess = (data) => {
  return {
    type: actionTypes.FETCH_HOME_SUCCESS,
    data,
  };
};
export const homeFail = (error) => {
  return {
    type: actionTypes.FETCH_HOME_FAIL,
    error,
  };
};

export const modalShowItemStart = () => {
  return {
    type: actionTypes.FETCH_HOME_MODAL_ITEM_START,
  };
};

export const modalShowItemFail = (error) => {
  return {
    type: actionTypes.FETCH_HOME_MODAL_ITEM_FAIL,
    error: error,
  };
};

export const modalShowItemSuccess = (data) => {
  return {
    type: actionTypes.FETCH_HOME_MODAL_ITEM_SUCCESS,
    data,
  };
};

export const modalShowItemTurnOffModal = () => {
  return {
    type: actionTypes.FETCH_HOME_TURN_OFF_MODAL,
  };
};
export const modalShowItemInit = (id) => {
  return (dispatch) => {
    dispatch(modalShowItemStart());
    axios
      .get("/products/" + id)
      .then((data) => dispatch(modalShowItemSuccess(data)))
      .catch((error) => dispatch(modalShowItemFail(error)));
  };
};

export const homeInit = () => {
  return (dispatch) => {
    dispatch(homeStart());
    axios
      .get("/products?_start=0&_end=8")
      .then((data) => {
        dispatch(homeSuccess(data));
      })
      .catch((error) => dispatch(homeFail(error)));
  };
};

export const homeOnChangeQuanlity = (quanlity) => {
  return {
    type: actionTypes.FETCH_HOME_ON_CHANGE_QUANLITY,
    quanlity,
  };
};

export const homePlusQuanlity = () => {
  return {
    type: actionTypes.FETCH_HOME_PLUS_QUANLITY,
  };
};

export const homeMiunsQuanlity = () => {
  return {
    type: actionTypes.FETCH_HOME_MIUNS_QUANLITY,
  };
};
