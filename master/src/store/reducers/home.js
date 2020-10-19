import * as actionTypes from "../actions/actionTypes";
import { immutableObject } from "../actions/uilities";
const initalState = {
  data: null,
  loading: false,
  error: null,
  idItem: null,
  showModal: false,
  dataModal: null,
  loadingShowModal: false,
};

const homeStart = (state, action) => {
  return immutableObject(state, { loading: true });
};

const homeSuccess = (state, action) => {
  return immutableObject(state, { data: action.data, loading: false });
};

const homeFail = (state, action) => {
  return immutableObject(state, { loading: false, error: action.error });
};

const modalShowItemStart = (state, action) => {
  return immutableObject(state, { loadingShowModal: true, showModal: true });
};

const modalShowItemTurnOffModal = (state) => {
  return immutableObject(state, { showModal: false });
};

const modalShowItemSuccess = (state, action) => {
  return immutableObject(state, {
    dataModal: action.data,
    loadingShowModal: false,
  });
};

const homeOnChangeQuanlity = (state, action) => {
  return immutableObject(state, {
    dataModal: {
      ...state.dataModal,
      quanlity: action.quanlity,
    },
  });
};

const homePlusQuanlity = (state) => {
  return immutableObject(state, {
    dataModal: {
      ...state.dataModal,
      quanlity: state.dataModal.quanlity + 1,
    },
  });
};

const homeMinusQuanlity = (state) => {
  if (state.dataModal.quanlity <= 1 || state.dataModal.quanlity > 100)
    return state;
  return immutableObject(state, {
    dataModal: {
      ...state.dataModal,
      quanlity: state.dataModal.quanlity - 1,
    },
  });
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOME_START:
      return homeStart(state, action);
    case actionTypes.FETCH_HOME_SUCCESS:
      return homeSuccess(state, action);
    case actionTypes.FETCH_HOME_FAIL:
      return homeFail(state, action);
    case actionTypes.FETCH_HOME_MODAL_ITEM_START:
      return modalShowItemStart(state, action);
    case actionTypes.FETCH_HOME_MODAL_ITEM_SUCCESS:
      return modalShowItemSuccess(state, action);
    case actionTypes.FETCH_HOME_TURN_OFF_MODAL:
      return modalShowItemTurnOffModal(state);
    case actionTypes.FETCH_HOME_MIUNS_QUANLITY:
      return homeMinusQuanlity(state);
    case actionTypes.FETCH_HOME_PLUS_QUANLITY:
      return homePlusQuanlity(state);
    case actionTypes.FETCH_HOME_ON_CHANGE_QUANLITY:
      return homeOnChangeQuanlity(state, action);
    default:
      return state;
  }
};

export default reducer;
