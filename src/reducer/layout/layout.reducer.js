import LayoutConstants from "./layout.constants";

const LayoutReducer = (state = {show: false}, action) => {
  switch (action.type) {
    case LayoutConstants.TOGGLE_SIDE_BAR:
      return {
        ...state,
        show: !state.show
      };
    default:
      return state;
  }
}

export default LayoutReducer
