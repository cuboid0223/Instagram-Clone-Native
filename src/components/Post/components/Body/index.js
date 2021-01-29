import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Body = ({imageUri}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imageUri}} />
    </View>
  );
};

export default Body;
