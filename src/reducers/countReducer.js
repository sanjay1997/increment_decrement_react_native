import { ADDITION, SUBTRACTION } from "../constants";

const initialState = {
  counter: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return {...state, counter: state.counter + 1};

    case SUBTRACTION:
      return {...state,counter: state.counter - 1};

      default:
        return state;
  }
};

export default countReducer;
