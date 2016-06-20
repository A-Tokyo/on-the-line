import React,
{View}
from 'react-native'
import MyImages from './MyImages'
import UserInfo from './UserInfo'
import styles from '../styles/'

const Profile = (props) => (
  <View style={styles.mainView}>
    <UserInfo />
    <MyImages />
  </View>
)

export default Profile
