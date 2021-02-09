import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import {listStorys} from '../../graphql/queries';
import styles from './styles';
import Story from '../UserStoryPreview';
// import StoriesData from '../../data/stories';
const UserStoriesPreview = () => {
  const [stories, setStories] = useState([]);
  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStorys));
      setStories(storiesData.data.listStorys.items);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <View style={styles.container}>
      {/* {data.map((story) => (
        <Story imageUri={story.imageUri} name={story.name} />
      ))} */}
      <FlatList
        data={stories}
        horizontal //水平拖曳
        showsHorizontalScrollIndicator={false} // 滾軸消失
        keyExtractor={({user: {id}}) => id} // keyId??
        renderItem={({item}) => <Story story={item} />}
      />
    </View>
  );
};

export default UserStoriesPreview;
