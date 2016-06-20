import React,
{
  ListView,
  View
}
from 'react-native'
import PicPost from './PicPost.js'
import styles from '../styles/'
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => !r1!=r2
});

const Home = (props)=> (
  <View style={styles.mainView}>
    <ListView
      dataSource  ={ds.cloneWithRows([1,2,3,4,5,6])}
      renderRow   ={(post)=>(
        <PicPost />
      )}
      />
  </View>
)
export default Home
