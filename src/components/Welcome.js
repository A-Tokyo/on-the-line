import React,
{View,Image,Text,TouchableHighlight, TextInput}
from 'react-native'
import styles from '../styles/'
import Login from './Login.js'
const Welcome = (props)=>(
  <View
    style={{ padding: 15, margin:20, backgroundColor:'white', flex:1,
      flexDirection:'column',alignItems: 'center', justifyContent:'center'}}>
    <Image
    source={require('../../assets/on-the-line.png')}/>
  <Login />
</View>
)

export default Welcome
