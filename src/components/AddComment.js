import React, {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableHighlight,
} from 'react-native'
import styles from '../styles/'
let deviceWidth = Dimensions.get('window').width

const AddComment = (props)=>
(
  <View style={styles.mainView}>
    <Text
      style={{
        color: 'white',
        fontSize: 30,
        fontWeight: 'normal',
        fontFamily: 'Helvetica Neue',
        margin: 10
      }}>
      Add a comment!
    </Text>
    <TextInput
      style={{...styles.customInput, height:100}}
      placeholder={'Comment'}
      placeholderTextColor={"#fff"}
      autoCorrect={false}
      multiline={true}
      />
    <TouchableHighlight
      style={{
        width: deviceWidth - 100,
        margin:10
      }}>
      <Text style={{color: '#fff', fontSize:30}}>SEND</Text>
    </TouchableHighlight>

  </View>
)

export default AddComment
