import * as types from '../constants/actionTypes';
// import Firebase from 'firebase';
//
// let app = new Firebase("https://on-the-line-49498.firebaseio.com");

export function updateEmail(email){
  return {
    type: types.UPDATE_EMAIL,
    email
  }
}
export function updatePassword(password){
  return {
    type: types.UPDATE_PASSWORD,
    password
  }
}

export function signupRequest(){
  return {
    type: types.SIGNUP_REQUEST
  }
}
export function signupSuccess(){
  return {
    type: types.SIGNUP_SUCCESS
  }
}

export function signup(){
  return (dispatch,getState) => {
    const email = getState().user.email;
    const password = getState().user.password;
    dispatch(signupRequest());
    return fetch('http://localhost:3000/signup',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email, password})
    })
    .then(
      dispatch(signupSuccess())
    )
  }
}
