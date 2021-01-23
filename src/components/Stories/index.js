import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import Story from '../../components/Story';
const Stories = () => {
  const data = [
    {
      imageUri:
        'https://instagram.ftpe1-2.fna.fbcdn.net/v/t51.2885-19/s320x320/66980043_851506368567990_2622629609304227840_n.jpg?_nc_ht=instagram.ftpe1-2.fna.fbcdn.net&_nc_ohc=MbYCieawnK4AX-mefbf&tp=1&oh=e5b49c66d0c6464c21e0854dcf46ee7f&oe=6036E31C',
      name: 'cuboid',
    },
    {
      imageUri:
        'https://instagram.ftpe1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/141092963_1755459621299520_4293532733848701917_n.jpg?_nc_ht=instagram.ftpe1-2.fna.fbcdn.net&_nc_ohc=YX0dIurFZ4IAX_ua1or&tp=1&oh=040fa175d0c656b7909e48148a71c309&oe=6033AFDB',
      name: 'glo._.xin._.la',
    },
    {
      imageUri:
        'https://instagram.ftpe1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/141092963_1755459621299520_4293532733848701917_n.jpg?_nc_ht=instagram.ftpe1-2.fna.fbcdn.net&_nc_ohc=YX0dIurFZ4IAX_ua1or&tp=1&oh=040fa175d0c656b7909e48148a71c309&oe=6033AFDB',
      name: 'glo._.xin._.la',
    },
    {
      imageUri:
        'https://instagram.ftpe1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/141092963_1755459621299520_4293532733848701917_n.jpg?_nc_ht=instagram.ftpe1-2.fna.fbcdn.net&_nc_ohc=YX0dIurFZ4IAX_ua1or&tp=1&oh=040fa175d0c656b7909e48148a71c309&oe=6033AFDB',
      name: 'glo._.xin._.la',
    },
    {
      imageUri:
        'https://instagram.ftpe1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/141092963_1755459621299520_4293532733848701917_n.jpg?_nc_ht=instagram.ftpe1-2.fna.fbcdn.net&_nc_ohc=YX0dIurFZ4IAX_ua1or&tp=1&oh=040fa175d0c656b7909e48148a71c309&oe=6033AFDB',
      name: 'glo._.xin._.la',
    },
    {
      imageUri:
        'https://instagram.ftpe1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/141092963_1755459621299520_4293532733848701917_n.jpg?_nc_ht=instagram.ftpe1-2.fna.fbcdn.net&_nc_ohc=YX0dIurFZ4IAX_ua1or&tp=1&oh=040fa175d0c656b7909e48148a71c309&oe=6033AFDB',
      name: 'glo._.xin._.la',
    },
  ];
  return (
    <View style={styles.container}>
      {/* {data.map((story) => (
        <Story imageUri={story.imageUri} name={story.name} />
      ))} */}
      <FlatList
        horizontal //水平拖曳
        showsHorizontalScrollIndicator={false} // 滾軸消失
        keyExtractor={({name}) => name} // keyId??
        data={data}
        renderItem={({item}) => (
          <Story imageUri={item.imageUri} name={item.name} />
        )}
      />
    </View>
  );
};

export default Stories;
