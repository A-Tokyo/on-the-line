import React,
{View,
  TouchableHighlight,
  Image}
  from 'react-native'

  import ImageButton from './ImageButton'
  import styles from '../styles/'
  const Footer = (props) =>(
    <View style={styles.footer}>
      <TouchableHighlight>
        <Image style={styles.img} source={require('../../assets/home.png') } />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image style={styles.img} source={require('../../assets/camera.png') } />
      </TouchableHighlight>
      <TouchableHighlight>
        <Image style={styles.img} source={require('../../assets/clown.png') } />
      </TouchableHighlight>
    </View>
  )

  export default Footer
