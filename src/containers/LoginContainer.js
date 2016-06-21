import { connect } from 'react-redux'
import Login from '../components/Login.js'

import {updateEmail,updatePassword,signup} from '../actions/'
import UploadPic from '../components/UploadPic.js'
const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateEmail: (email) => {
      dispatch(updateEmail(email))
    },
    updatePassword: (password)=>{
      dispatch(updatePassword(password))
    },
    signup: ()=>{
      dispatch(signup())
      ownProps.navigator.push({
        component: UploadPic,
        name: 'upload'
      })
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer
