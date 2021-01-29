import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
const Post = ({post: {user, imageUri, likesCount, caption, postedAt}}) => {
  return (
    <View style={styles.container}>
      <Header imageUri={user.imageUri} name={user.name} />
      <Body imageUri={imageUri} />
      <Footer likesCount={likesCount} caption={caption} postedAt={postedAt} />
    </View>
  );
};

export default Post;
