import React,
{
  TouchableHighlight,
  Image
}
from 'react-native'


const ImageButton = ({imageUrl})=>(
  <TouchableHighlight>
    <Image style={{height:40, width:40}} source={require('../../assets/clown.png') } />
  </TouchableHighlight>
)

export default ImageButton
