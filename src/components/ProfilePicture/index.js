import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
const ProfilePicture = ({uri, size = 70, color = '#ae22e0'}) => {
  //default size = 70，因為在動態上的頭像跟貼文的頭像大小有差異故先設定 70 是動態的大小
  return (
    <View
      style={[
        styles.container,
        {width: size + 5, height: size + 5, borderColor: color},
      ]}>
      <Image
        style={[styles.image, {width: size, height: size}]}
        source={{uri}}
      />
    </View>
  );
};

export default ProfilePicture;
