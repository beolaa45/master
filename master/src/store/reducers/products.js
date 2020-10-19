import * as actionTypes from "../actions/actionTypes";
import { immutableObject } from "../actions/uilities";

const initalState = {
  data: null,
  loading: false,
  error: null,
  showModal: false,
  dataModal: null,
  loadingModal: false,
  errorModal: null,
};

const productsStart = (state, action) => {
  return immutableObject(state, { loading: true });
};

const productsSuccess = (state, action) => {
  return immutableObject(state, { loading: false, data: action.data });
};

const productsFail = (state, action) => {
  return immutableObject(state, { loading: false, error: action.error });
};

const productsShowModal = (state) => {
  return immutableObject(state, { showModal: true });
};

const productsTurnOffModal = (state) => {
  return immutableObject(state, { showModal: false });
};

const productsItemModalStart = (state) => {
  return immutableObject(state, { loadingModal: true });
};

const productsItemModalSuccess = (state, action) => {
  return immutableObject(state, {
    loadingModal: false,
    dataModal: action.data,
  });
};

const productsItemModalFail = (state, action) => {
  return immutableObject(state, {
    loadingModal: false,
    errorModal: action.error,
  });
};

const productsOnChangeQuanlity = (state, action) => {
  return immutableObject(state, {
    dataModal: {
      ...state.dataModal,
      quanlity: action.quanlity,
    },
  });
};

const productsPlusQuanlity = (state) => {
  return immutableObject(state, {
    dataModal: {
      ...state.dataModal,
      quanlity: state.dataModal.quanlity + 1,
    },
  });
};

const productsMinusQuanlity = (state) => {
  if (state.dataModal.quanlity <= 1 || state.dataModal.quanlity > 100)
    return state;
  return immutableObject(state, {
    dataModal: {
      ...state.dataModal,
      quanlity: state.dataModal.quanlity - 1,
    },
  });
};
const productsSortStart = (state) => {
  return immutableObject(state, { loading: true });
};
const productsSortSuccess = (state, action) => {
  return immutableObject(state, { loading: false, data: action.data });
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return productsStart(state, action);
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return productsSuccess(state, action);
    case actionTypes.FETCH_PRODUCTS_FAIL:
      return productsFail(state, action);
    case actionTypes.FETCH_PRODUCTS_SHOW_MODAL:
      return productsShowModal(state);
    case actionTypes.FETCH_PRODUCTS_TURN_OFF_MODAL:
      return productsTurnOffModal(state);
    case actionTypes.FETCH_PRODUCTS_MODAL_ITEM_START:
      return productsItemModalStart(state);
    case actionTypes.FETCH_PRODUCTS_MODAL_ITEM_SUCCESS:
      return productsItemModalSuccess(state, action);
    case actionTypes.FETCH_PRODUCTS_MODAL_ITEM_FAIL:
      return productsItemModalFail(state, action);
    case actionTypes.FETCH_PRODUCTS_MIUNS_QUANLITY:
      return productsMinusQuanlity(state);
    case actionTypes.FETCH_PRODUCTS_PLUS_QUANLITY:
      return productsPlusQuanlity(state);
    case actionTypes.FETCH_PRODUCTS_ON_CHANGE_QUANLITY:
      return productsOnChangeQuanlity(state, action);
    case actionTypes.FETCH_PRODUCTS_SORT_START:
      return productsSortStart(state, action);
    case actionTypes.FETCH_PRODUCTS_SORT_SUCCESS:
      return productsSortSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
