import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../UserStoriesPreview';
const Feed = () => {
  const data = [
    {
      id: '1',
      user: {
        imageUri:
          'https://avatars.githubusercontent.com/u/59163273?s=460&u=242f615145270e055608d4ddd65fc9981dfb0785&v=4',
        name: 'cuboid0223',
      },
      imageUri:
        'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      caption: '拎刀西郎',
      likesCount: 40678,
      postedAt: '6分鐘前',
    },
    {
      id: '2',
      user: {
        imageUri:
          'https://avatars.githubusercontent.com/u/59163273?s=460&u=242f615145270e055608d4ddd65fc9981dfb0785&v=4',
        name: 'cuboid0223',
      },
      imageUri:
        'https://images.pexels.com/photos/6353750/pexels-photo-6353750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      caption: '拎刀西郎',
      likesCount: 40678,
      postedAt: '6分鐘前',
    },
    {
      id: '3',
      user: {
        imageUri:
          'https://instagram.ftpe1-3.fna.fbcdn.net/v/t51.2885-19/s150x150/131260261_3552683498158965_2989020069192834212_n.jpg?_nc_ht=instagram.ftpe1-3.fna.fbcdn.net&_nc_ohc=zWrsa5BPBt4AX_ye-rl&tp=1&oh=5d9196fd2f536b3f6e6bf9c1e0b7b9a4&oe=60397ACC',
        name: 'cuboid0223',
      },
      imageUri:
        'https://images.pexels.com/photos/6353750/pexels-photo-6353750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      caption: '拎刀西郎',
      likesCount: 40678,
      postedAt: '6分鐘前',
    },
  ];
  return (
    <FlatList
      keyExtractor={({id}) => id}
      data={data}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
