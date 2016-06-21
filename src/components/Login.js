import React,
{
  View,
  Text,
  TextInput,
  TouchableHighlight
}
from 'react-native'

import styles from '../styles/'

const Login = ({updateEmail,updatePassword,signup})=>(
  <View style={{margin:10}}>
    <View style = {{ padding: 15, backgroundColor:'white', flex:1, flexDirection:'column',alignItems: 'center', justifyContent:'center'}}>
      <TextInput
        style={styles.customInput}
        placeholder={'Email'}
        placeholderTextColor={"black"}
        autoFocus={true}
        autoCorrect={false}
        onChangeText={updateEmail}
        />
      <TextInput
        style={styles.customInput}
        placeholder={'Password'}
        placeholderTextColor={"black"}
        autoFocus={true}
        autoCorrect={false}
        secureTextEntry ={true}
        onChangeText={updatePassword}
        />
    </View>
    <View style={{ padding: 15, backgroundColor:'white', flex:1, flexDirection:'row',alignItems: 'center', justifyContent:'center'}}>
      <TouchableHighlight
        style={{
          margin:40
        }}>
        <Text style={{color: 'black', fontSize:20}}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={signup}
        style={{
          margin:40
        }}>
        <Text style={{color: 'black', fontSize:20}}>Sign Up</Text>
      </TouchableHighlight>
    </View>
  </View>

)

export default Login
