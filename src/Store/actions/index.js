import * as actionTypes from '../actionTypes';

export const fetchProducts = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
  };
};
export const fetchProductSuccess = data => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};
export const fetchProductsFail = error => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    payload: error,
  };
};
