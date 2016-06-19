import {Dimensions} from 'react-native'
let deviceWidth = Dimensions.get('window').width;

export default {
  customInput : {
    height: 50,
    padding: 5,
    width: deviceWidth - 100,
    color: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor:'#fff',
    margin :10,
    fontSize : 20
  },
  mainView : {
    padding: 15,
    backgroundColor:'black',
    flexDirection:'column',
    flex: 1,
    alignItems: 'stretch',
    justifyContent:'center'
  }
}
