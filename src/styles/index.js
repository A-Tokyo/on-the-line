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
    marginTop : 15,
    padding: 10,
    backgroundColor:'white',
    flexDirection:'column',
    flex: 1,
    alignItems: 'stretch',
    justifyContent:'center'
  },
  list:
  {
    flexDirection: 'row',
    flexWrap: 'wrap'
    }

}
