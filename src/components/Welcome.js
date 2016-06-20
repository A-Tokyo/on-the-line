import React,
{View,Image,Text,TouchableHighlight}
from 'react-native'


const Welcome = (props)=>(
  <View style={{ padding: 15, margin:20, backgroundColor:'white', flex:1, flexDirection:'column',alignItems: 'center', justifyContent:'center'}}>
    <Image
    source={require('../../assets/on-the-line.png')}/>
  <TouchableHighlight
    style={{
      margin:40
    }}>
    <Text style={{color: 'black', fontSize:30}}>Login</Text>
  </TouchableHighlight>

</View>
)

export default Welcome
