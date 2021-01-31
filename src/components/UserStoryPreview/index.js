import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import ProfilePicture from '../ProfilePicture';
const Story = ({imageUri, name}) => {
  const navigation = useNavigation();
  const onPress = () => {
    //console.warn(`${name} press`);
    navigation.navigate('Story');
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
