import React, {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableHighlight,
} from 'react-native'
import styles from '../styles/'
let deviceWidth = Dimensions.get('window').width

const UploadPic = (props) => (
  <View style={styles.mainView}>
    <Text
      style={{
        color: 'white',
        fontSize: 30,
        fontWeight: 'normal',
        fontFamily: 'Helvetica Neue',
        margin: 10
      }}>
      Upload a picture!
    </Text>
    <TextInput
      style={styles.customInput}
      placeholder={'Image Link'}
      placeholderTextColor={"#fff"}
      autoFocus={true}
      autoCorrect={false}
      />
    <TextInput
      style={{...styles.customInput, height:100}}
      placeholder={'Caption'}
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
);



UploadPic.propTypes = {}
UploadPic.defaultProps = {}
export default UploadPic
