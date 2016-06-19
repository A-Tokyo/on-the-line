import React,
{View,Image}
from 'react-native'

const Home = (props)=>(
  <View style={{ padding: 15, backgroundColor:'white', flex:1, alignItems: 'center', justifyContent:'center'}}>
    <Image
      source={require('../../assets/on-the-line.png')}/>
  </View>
)

export default Home
