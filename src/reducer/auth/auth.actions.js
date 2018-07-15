import AuthConstants from "./AuthConstants";

export const signInUser = (name) => ({
  type: AuthConstants.SIGN_IN_AUTH,
  name
});

export const signOutUser = () => ({
  type: AuthConstants.SIGN_OUT_AUTH,
});

export const toggleUser = (show) => ({
  type: AuthConstants.TOGGLE_AUTH,
  show,
});