import React,
{View,Text,TouchableHighlight}
from 'react-native'

import styles from '../styles/'

const Comment = ({username, comment}) => (
  <View style={styles.mainView}>
    <TouchableHighlight>
      <Text style={{color: 'black', fontSize:15}}>{username}</Text>
    </TouchableHighlight>
    <Text style={{color: 'black', fontSize:10, flex:1, flexWrap:'wrap'}}>
      {comment}
    </Text>
  </View>
)

export default Comment
