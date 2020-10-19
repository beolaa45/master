
import * as actionTypes from "../actions/actionTypes";
import { immutableObject, storage } from "../actions/uilities";
const initalState = {
  data: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).data
    : [],
  loading: false,
};

const cartStart = (state) => {
  return immutableObject(state, { loading: true });
};

const cartSuccess = (state, action) => {
  let newState;

  let newData = [...state?.data];
  if (newData.length) {
    for (let i = 0; i < newData?.length; i++) {
      if (newData[i].id !== action.data.id) {
        newState = immutableObject(state, {
          loading: false,
          data: state.data.concat([action.data]),
        });

        localStorage.setItem("cart", JSON.stringify(newState));
      } else {
        newData[i] = {
          ...newData[i],
          quanlity: newData[i].quanlity + action.data.quanlity,
        };

        localStorage.setItem(
          "cart",
          JSON.stringify({ data: newData, loading: false })
        );
        return { data: newData, loading: false };
      }
    }
  } else {
    newState = immutableObject(state, {
      loading: false,
      data: state.data.concat([action.data]),
    });
    localStorage.setItem("cart", JSON.stringify(newState));
   
  }

  return newState;
};

const cartOnChangeQuanlity = (state, action) => {
  let newData = [...state.data];
  let indexItem = newData.findIndex((obj) => obj.id === action.id);
  let newItem = { ...newData[indexItem], quanlity: action.quanlity };
  newData[indexItem] = newItem;
  storage({ loading: false, data: newData });
  return { loading: false, data: newData };
};

const cartPlusQuanlity = (state, action) => {
  let newData = [...state.data];
  let indexItem = newData.findIndex((obj) => obj.id === action.id);
  let newItem = {
    ...newData[indexItem],
    quanlity: newData[indexItem].quanlity + 1,
  };
  newData[indexItem] = newItem;
  storage({ loading: false, data: newData });
  return { loading: false, data: newData };
};

const cartMinusQuanlity = (state, action) => {
  let newData = [...state.data];
  let indexItem = newData.findIndex((obj) => obj.id === action.id);
  if (state.data[indexItem].quanlity <= 1) {
    return state;
  }
  let newItem = {
    ...newData[indexItem],
    quanlity: newData[indexItem].quanlity - 1,
  };
  newData[indexItem] = newItem;
  storage({ loading: false, data: newData });
  return { loading: false, data: newData };
};
const cartDelete = (state, action) => {
  let newData = [...state.data];
  let indexItem = newData.findIndex((obj) => obj.id === action.id);
  newData.splice(indexItem, 1);
  storage({ loading: false, data: newData });
  return { loading: false, data: newData };
};
const cartFail = () => {};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CART_ADD_START:
      return cartStart(state, action);
    case actionTypes.FETCH_CART_ADD_SUCCESS:
      return cartSuccess(state, action);
    case actionTypes.FETCH_CART_ADD_FAIL:
      return cartFail(state, action);
    case actionTypes.FETCH_CART_ON_CHANGE_QUANLITY:
      return cartOnChangeQuanlity(state, action);
    case actionTypes.FETCH_CART_PLUS_QUANLITY:
      return cartPlusQuanlity(state, action);
    case actionTypes.FETCH_CART_MIUNS_QUANLITY:
      return cartMinusQuanlity(state, action);
    case actionTypes.FETCH_CART_DELETE:
      return cartDelete(state, action);
    default:
      return state;
  }
};

export default reducer;
