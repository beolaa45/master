import * as actionTypes from "./actionTypes";
import axios from "../../api/baseApi";

///PRODUCT ITEM
const productsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START,
  };
};

const productsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    data,
  };
};

const productsFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    error,
  };
};

export const productsInit = () => {
  return (dispatch) => {
    dispatch(productsStart());
    axios
      .get("/products?categories_like=&_sort=id&_order=desc&_limit=9&_page=1")
      .then((data) => dispatch(productsSuccess(data)))
      .catch((error) => dispatch(productsFail(error)));
  };
};
/////SHOWMODAL AND ITEM
export const productsItemModalStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_MODAL_ITEM_START,
  };
};

export const productsItemModalSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_MODAL_ITEM_SUCCESS,
    data,
  };
};

export const productsItemModalFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_MODAL_ITEM_FAIL,
    error,
  };
};

export const productsShowModal = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SHOW_MODAL,
  };
};

export const productsTurnOffModal = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_TURN_OFF_MODAL,
  };
};



export const productsItemModalInit = (id) => {
  return (dispatch) => {
    dispatch(productsItemModalStart());
    dispatch(productsShowModal());
    axios
      .get("/products/" + id)
      .then((data) => {
        dispatch(productsItemModalSuccess(data));
      })
      .catch((error) => dispatch(productsItemModalFail(error)));
  };
};

export const productsOnChangeQuanlity = (quanlity) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_ON_CHANGE_QUANLITY,
    quanlity,
  };
};

export const productsPlusQuanlity = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_PLUS_QUANLITY,
  };
};

export const productsMiunsQuanlity = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_MIUNS_QUANLITY,
  };
};

export const productsSortStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SORT_START
  };
};

export const productsSortSuccess = (data) => {
   
    return {
      type: actionTypes.FETCH_PRODUCTS_SORT_SUCCESS,
      data,
    };
  };

  export const productsSortFail = (error) => {
    return {
      type: actionTypes.FETCH_PRODUCTS_SORT_FAIL,
      error,
    };
  };


export const productsSelectPage = (data) => {

}

export const productsSortInit = (url) => {
    return dispatch => {
        dispatch(productsSortStart())
        axios.get(url)
        .then((data) => dispatch(productsSortSuccess(data)))
        .catch(error => dispatch(productsSortFail(error)))
    }
}

