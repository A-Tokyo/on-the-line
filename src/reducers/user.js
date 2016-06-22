import * as types from '../constants/actionTypes';

export default (state = {email:'',password:''}, action) => {
  switch (action.type) {
    case types.UPDATE_EMAIL:
    return Object.assign({}, state, {
      email: action.email
    });
    case types.UPDATE_PASSWORD:
    return Object.assign({}, state, {
      password: action.password
    });
    case types.SIGNUP_REQUEST:
    return Object.assign({}, state, {
      authenticating: true
    });
    case types.SIGNUP_SUCCESS:
    return Object.assign({}, state, {
      authenticating: false
    });
    case types.SIGNUP_FAIL:{
      alert(action.message)
      return Object.assign({}, state, {
        authenticating: false
      });
    }
    default:
    return state;

  }
}
