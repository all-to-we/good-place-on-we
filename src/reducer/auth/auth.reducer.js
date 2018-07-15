import AuthConstants from "./auth.constants";

const AuthReducer = (state = {isAuthenticated: false}, action) => {
  switch (action.type) {
    case AuthConstants.AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case AuthConstants.AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}

export default AuthReducer
