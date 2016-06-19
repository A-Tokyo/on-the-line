import React,
{
  View,
  ListView,
  Image,
  TouchableHighlight
}
from 'react-native'

import styles from '../styles/'

var imagesUrls = ['https://i.ytimg.com/vi/k0GZIg8pvjM/hqdefault.jpg','http://www.thefamouspeople.com/profiles/images/adolf-hitler-32.jpg','https://i.ytimg.com/vi/k0GZIg8pvjM/hqdefault.jpg','https://i.ytimg.com/vi/k0GZIg8pvjM/hqdefault.jpg','http://www.thefamouspeople.com/profiles/images/adolf-hitler-32.jpg','https://i.ytimg.com/vi/k0GZIg8pvjM/hqdefault.jpg','http://www.thefamouspeople.com/profiles/images/adolf-hitler-32.jpg','https://i.ytimg.com/vi/k0GZIg8pvjM/hqdefault.jpg','https://i.ytimg.com/vi/k0GZIg8pvjM/hqdefault.jpg','http://www.thefamouspeople.com/profiles/images/adolf-hitler-32.jpg'];
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => !r1!=r2
});

const MyImages = (props)=>(
  <View style={styles.mainView}>
    <ListView
      contentContainerStyle=
      {{
        flexDirection: 'row',
        flexWrap: 'wrap'}}

      dataSource  ={ds.cloneWithRows(imagesUrls)}
      renderRow   ={(imageUrl)=>(
        <TouchableHighlight>
          <Image
            style={{height:60, width:60, margin:10}}
            source={{uri: imageUrl}}
            />
        </TouchableHighlight>
      )}
      />
  </View>

)

export default MyImages
