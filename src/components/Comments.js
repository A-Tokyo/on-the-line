import React,
{ View,
  ListView
}
from 'react-native'

import Comment from './Comment'
import styles from '../styles/'

var comments = [{username: 'hagar',comment:'hello it"s me'},{username: 'Hitler',comment:'whatevaaaaaaa'}];
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => !r1!=r2
});
const Comments = (props) => (
  <View style={styles.mainView}>
    <ListView
      dataSource  ={ds.cloneWithRows(comments)}
      renderRow   ={(comment)=>(
        <Comment {...comment} />
      )}
      />
  </View>
)

export default Comments
