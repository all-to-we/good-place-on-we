import AuthConstants from "./AuthConstants";

const AuthReducer = (state = {login: false, name: null, show: false}, action) => {
  switch (action.type) {
    case AuthConstants.SIGN_IN_AUTH:
      return {
        login: true,
        name: action.name,
        show: false
      };
    case AuthConstants.SIGN_OUT_AUTH:
      return {
        login: false,
        name: null,
        show: false
      };
    case AuthConstants.TOGGLE_AUTH:
      return {
        login: state.login,
        name: state.name,
        show: action.show
      };
    default:
      return state;
      //   return {
      //   login: true,
      //   name: 'name',
      //   show: false
      // };
  }
}

export default AuthReducer
