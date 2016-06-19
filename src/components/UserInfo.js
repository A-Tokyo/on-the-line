import React,
{
  View,
  Image,
  Text
}
from 'react-native'

const UserInfo = (props) =>
(
  <View style={{ backgroundColor:'white', flexDirection:'row', flex:1, alignItems: 'center', justifyContent:'center'}}>
    <Image style={{height:50, width:50, margin:20}}
    source={require('../../assets/hitler.png')}
    />

  <Text
    style={{
      color: 'black',
      fontSize: 30,
      fontWeight: 'normal',
      fontFamily: 'Helvetica Neue'
    }}>
    Hitler
  </Text>
</View>
)


export default UserInfo
