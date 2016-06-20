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
    alignItems: 'center',
    justifyContent:'center'
  },
  list:
  {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  img:
  {height:40, width:40},
  footer:
  {flexDirection:'row', flex:1,alignItems: 'center',
    justifyContent:'space-between', padding: 40,
    position: 'absolute', bottom:0, left: 0, right: 0,
    backgroundColor:'white'}


}
