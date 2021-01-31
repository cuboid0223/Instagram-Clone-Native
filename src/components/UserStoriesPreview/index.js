import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import Story from '../UserStoryPreview';
import StoriesData from '../../data/stories';
const UserStoriesPreview = () => {
  return (
    <View style={styles.container}>
      {/* {data.map((story) => (
        <Story imageUri={story.imageUri} name={story.name} />
      ))} */}
      <FlatList
        data={StoriesData}
        horizontal //水平拖曳
        showsHorizontalScrollIndicator={false} // 滾軸消失
        keyExtractor={({name}) => name} // keyId??
        renderItem={({item}) => (
          <Story imageUri={item.imageUri} name={item.name} />
        )}
      />
    </View>
  );
};

export default UserStoriesPreview;
