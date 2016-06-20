import React,
{
  View,
  Text,
  Image
} from 'react-native'
import styles from '../styles/'
const PicPost = (props) => (
  <View style={styles.mainView}>
    <TouchableHighlight
      style={{
        margin:20
      }}>
      <Text style={{color: 'black', fontSize:30}}>Username</Text>
    </TouchableHighlight>
    <Image source={{uri: 'https://i.ytimg.com/vi/k0GZIg8pvjM/hqdefault.jpg'}} />
    <TouchableHighlight
      style={{
        margin:20, backgroundColor:'black'
      }}>
      <Text style={{color: 'white', fontSize:30}}>Add Comment</Text>
    </TouchableHighlight>
  </View>

)

export default PicPost
