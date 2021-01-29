import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ProfilePicture from '../../../ProfilePicture';
import Icon from 'react-native-vector-icons/Entypo';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri} size={40} />
      <Text style={styles.name}>{name}</Text>
      <Icon
        style={styles.dotsThreeHorizontal}
        name="dots-three-horizontal"
        size={15}
      />
    </View>
  );
};

export default Header;
