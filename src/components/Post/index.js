import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
const Post = ({post: {user, image, likes, caption, createdAt}}) => {
  return (
    <View style={styles.container}>
      <Header imageUri={user.image} name={user.name} />
      <Body imageUri={image} />
      <Footer likesCount={likes} caption={caption} postedAt={createdAt} />
    </View>
  );
};

export default Post;
