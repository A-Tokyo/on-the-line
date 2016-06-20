import React,
{View,Text,TouchableHighlight}
from 'react-native'

import styles from '../styles/'

const Comment = ({username, comment}) => (
  <View style={{...styles.mainView, alignItems:'stretch'}}>
    <TouchableHighlight>
      <Text style={{color: 'black', fontSize:20}}>{username}</Text>
    </TouchableHighlight>
    <Text style={{color: 'black', fontSize:15, flex:1, flexWrap:'wrap'}}>
      {comment}
    </Text>
  </View>
)

export default Comment
