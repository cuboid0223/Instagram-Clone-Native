import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import ProfilePicture from '../ProfilePicture';
const Story = (props) => {
  console.log(props);
  const {
    story: {
      user: {id, image, name},
    },
  } = props;
  const navigation = useNavigation();
  const onPress = () => {
    //console.warn(`${name} press`);
    navigation.navigate('Story', {userId: id}); // 傳給 Story Component -> userId: id
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ProfilePicture uri={image} size={60} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
