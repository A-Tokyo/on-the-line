import React
{
  View,
  ListView,
  Image
}
from 'react-native'

var imagesUrls = [];

const MyImages = (props)=>(
  <View>
    <ListView
      horizontal={true}
      dataSource={imagesUrls}
      renderRow={(imageUrl)=>(
        <Image style={{height:50, width:50, margin:20}} source={{uri: }} />)}


      />
  </View>
)
