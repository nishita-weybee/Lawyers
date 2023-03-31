import {
  GET_PRODUCT_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_PRODUCT_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_PRODUCT_FOR_DROPDOWN_MASTERS_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  productList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getProductForDropdownReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_PRODUCT_FOR_DROPDOWN_MASTERS_REQUEST:
      return {
        loading: true,
        productList: {},
        error: "",
      };

    case GET_PRODUCT_FOR_DROPDOWN_MASTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        productList: action.payload,
      };

    case GET_PRODUCT_FOR_DROPDOWN_MASTERS_FAILURE:
      return {
        ...state,
        loading: false,
        productList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getProductForDropdownReducer };
