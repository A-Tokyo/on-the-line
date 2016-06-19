import React, {Component} from 'react-native'
// import { Provider } from 'react-redux/native'
// import configureStore from './store/configStore'

// import UploadPic from './components/UploadPic'
// import AddComment from './components/AddComment'
// import Home from './components/Home'
// import UserInfo from './components/UserInfo'
import MyImages from './components/MyImages'

// const store = configureStore()

class Root extends Component{
  render () {
    return (
        <MyImages />
    )
  }
}

export default Root
