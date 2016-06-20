import React,
{
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native'
import styles from '../styles/'
let deviceWidth = Dimensions.get('window').width
import Comments from './Comments.js'
const PicPost = (props) => (
  <View style={styles.mainView}>
    <ScrollView>
      <TouchableHighlight
        style={{
          margin:20
        }}>
        <Text style={{color: 'black', fontSize:20}}>Username</Text>
      </TouchableHighlight>
      <Image style={{height: 400,width:deviceWidth - 50}} source={{uri: 'https://i.ytimg.com/vi/k0GZIg8pvjM/hqdefault.jpg'}} />
      <TouchableHighlight
        style={{
          margin:20
        }}>
        <Text style={{color: 'black', fontSize:15}}>Add Comment</Text>
      </TouchableHighlight>
      <Comments />
    </ScrollView>
  </View>

)

export default PicPost
