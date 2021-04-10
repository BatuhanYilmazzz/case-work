import * as actionTypes from '../actionTypes';
import produce from 'immer';

const homeReducer = (state, action) => {
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.FETCH_PRODUCTS:
        draft.loading = true;
        break;
      case actionTypes.FETCH_PRODUCTS_SUCCESS:
        draft.error = action.payload;
        draft.loading = false;
        break;
      case actionTypes.FETCH_HOME_FAIL:
        draft.homeData = action.payload;
        draft.loading = false;
        break;
      default:
        return state;
    }
  });
};

export default homeReducer;
