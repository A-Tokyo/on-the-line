import React,
{View,Image,Text,TouchableHighlight, TextInput}
from 'react-native'
import styles from '../styles/'
import LoginContainer from '../containers/LoginContainer.js'
const Welcome = ({navigator})=>(
  <View
    style={{ padding: 15, margin:20, backgroundColor:'white', flex:1,
      flexDirection:'column',alignItems: 'center', justifyContent:'center'}}>
    <Image
    source={require('../../assets/on-the-line.png')}/>
  <LoginContainer navigator={navigator}  />
</View>
)

export default Welcome
