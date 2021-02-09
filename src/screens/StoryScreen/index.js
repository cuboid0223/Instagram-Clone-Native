import {useRoute, useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  View,
  TextInput,
} from 'react-native';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import storiesData from '../../data/stories';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {API, graphqlOperation} from 'aws-amplify';
import {listStorys} from '../../graphql/queries';
const StoryScreen = () => {
  // const [userStories, setUserStories] = useState(null);
  const [stories, setStories] = useState([]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [activeStory, setActiveStory] = useState(null);
  const route = useRoute(); // get object from Story
  const userId = route.params.userId; // get userId from object

  //   console.log(route);

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
    // setActiveStoryIndex(0); // 當天使用者點擊 要查看的人的第一個動態的 index
  }, [activeStoryIndex]);

  // useEffect(() => {
  //   const userStories = storiesData.find(
  //     // find the stories belong to the userId which user pressed
  //     (storyData) => storyData.user.id === userId,
  //   );
  //   // console.log('userStories2', userStories);
  //   setUserStories(userStories);
  //   setActiveStoryIndex(0); // 當天使用者點擊 要查看的人的第一個動態的 index
  // }, [route.params.userId]);

  useEffect(() => {
    if (!stories) {
      return;
    }
    //  防呆
    if (activeStoryIndex < 0) {
      // 已經點到該使用者最前一個動態
      setActiveStoryIndex(0);
    }
    //  防呆
    if (activeStoryIndex >= stories.length) {
      // 已經點到該使用者最後一個動態
      setActiveStoryIndex(stories.length - 1);
    }
    if (stories) {
      // 若該使用者動態不是空的
      setActiveStory(stories[activeStoryIndex]);
    }
  }, [activeStoryIndex]);

  // // 下一個使用者動態
  // const navigateToNextUser = () => {
  //   navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  //   return;
  // };

  // // 上一個使用者動態
  // const navigateToPrevUser = () => {
  //   navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  //   return;
  // };

  // 下一個動態
  const handleNextStory = () => {
    console.log('NextStory');
    if (activeStoryIndex >= stories.length - 1) {
      // 如果按到最後一個動態，則換到下一個人的動態
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
    console.log('activeStoryIndex: ', activeStoryIndex);
  };

  // 上一個動態
  const handlePrevStory = () => {
    console.log('PrevStory ');
    if (activeStoryIndex < 0) {
      // 如果按到第一個動態的左邊，則換到前一個人的動態
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };
  // 判斷使用者按動態的哪一邊，左還右邊
  const handlePress = (e) => {
    const x = e.nativeEvent.locationX;
    if (x < Dimensions.get('window').width / 2) {
      // 按到左邊區塊
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!activeStory) {
    // 如果 activeStory 是 null 則
    return (
      <SafeAreaView>
        {/* Displays a circular loading indicator. */}
        {/* 
        因為圖片為載入 所以  activeStory.imageUri 會是 null ，
        故在 activeStory 是 null 時顯示 indicator
        */}
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground
          style={styles.image}
          imageStyle={{borderRadius: 10}}
          source={{uri: activeStory.image}}>
          <View style={styles.userInfo}>
            <ProfilePicture size={40} uri={activeStory.user.image} />
            <Text style={styles.userName}>{activeStory.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.createdAt}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <TextInput
              style={styles.textInput}
              editable
              placeholder="傳送訊息"
              placeholderTextColor="#fff"
            />
            <Ionicons
              style={styles.textInput__icon}
              name={'ios-happy-outline'}
              size={25}
              color={'#fff'}
            />
            <Ionicons
              style={styles.textInput__icon}
              name={'paper-plane-outline'}
              size={25}
              color={'#fff'}
            />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
