import AuthConstants from "./auth.constants";

export const authSuccess = () => ({
  type: AuthConstants.AUTH_SUCCESS
});

export const authFail = () => ({
  type: AuthConstants.AUTH_FAIL
});

export const toggleUser = (show) => ({
  type: AuthConstants.TOGGLE_AUTH,
  show,
});