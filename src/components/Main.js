import React,
{ScrollView,View}
from 'react-native'
import Home from './Home'

import Footer from './Footer'

const Main =(props)=>(
  <View style={{flex: 1}}>
    <ScrollView>
      <Home />
    </ScrollView>
    <Footer />
  </View>
)
export default Main
