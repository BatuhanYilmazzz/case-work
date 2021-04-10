import React, {createContext, useReducer} from 'react';
import axios from 'axios';
import {
  fetchProductSuccess,
  fetchProductsFail,
  fetchProducts,
} from '../actions';
import homeReducer from '../reducers';

export const Context = createContext();

const initialState = {
  homeData: [],
  error: null,
  loading: true,
};

const ContextState = ({children}) => {
  const [state, dispatch] = useReducer(homeReducer, initialState);

  const getProducts = async () => {
    dispatch(fetchProducts());
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(fetchProductSuccess(res.data));
    } catch (err) {
      dispatch(fetchProductsFail(err));
    }
  };
  return (
    <Context.Provider
      value={{
        getProducts,
        homeData: state.homeData,
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextState;
