import * as actionTypes from "../actions/actionTypes";
import { immutableObject } from "../actions/uilities";
let initalState = {
  data: null,
  loading: false,
  error: null,
};
const detailStart = (state, action) => {
  return immutableObject(state, { loading: true });
};

const detailSuccess = (state, action) => {
  return immutableObject(state, { loading: false, data: action.data });
};

const detailFail = (state, action) => {
  return immutableObject(state, { loading: false, error: action.error });
};

const detailOnChangeQuanlity = (state, action) => {
  return immutableObject(state, {
    data: {
      ...state.data,
      quanlity: action.quanlity,
    },
  });
};

const detailPlusQuanlity = (state) => {
  return immutableObject(state, {
    data: {
      ...state.data,
      quanlity: state.data.quanlity + 1,
    },
  });
};

const detailMinusQuanlity = (state) => {
  if (state.data.quanlity <= 1 || state.data.quanlity > 100) return state;
  return immutableObject(state, {
    data: {
      ...state.data,
      quanlity: state.data.quanlity - 1,
    },
  });
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DETAIL_START:
      return detailStart(state, action);
    case actionTypes.FETCH_DETAIL_SUCCESS:
      return detailSuccess(state, action);
    case actionTypes.FETCH_DETAIL_FAIL:
      return detailFail(state, action);
    case actionTypes.FETCH_DETAIL_ON_CHANGE_QUANLITY:
      return detailOnChangeQuanlity(state, action);
    case actionTypes.FETCH_DETAIL_PLUS_QUANLITY:
      return detailPlusQuanlity(state, action);
    case actionTypes.FETCH_DETAIL_MIUNS_QUANLITY:
      return detailMinusQuanlity(state);
    default:
      return state;
  }
};

export default reducer;
