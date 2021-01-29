import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import ADIcon from 'react-native-vector-icons/AntDesign';
const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
  // 重新命名 likesCount 為 likesCountProp 避免跟 state 重複
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const onLikePressed = () => {
    // console.warn('object');
    setIsLiked(!isLiked); // 愛心變色
    const amount = isLiked ? -1 : 1; // 加減讚的數量
    setLikesCount(likesCount + amount); // 文章總讚數 + - 1
  };

  useEffect(() => {
    setLikesCount(likesCountProp); // 取得文章總讚數
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconWrap}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <ADIcon
                style={[styles.icon, styles.heartPressed]}
                name="heart"
                size={27}
                color={'#DC565B'}
              />
            ) : (
              <ADIcon style={styles.icon} name="hearto" size={27} />
            )}
          </TouchableWithoutFeedback>

          <Icon style={styles.icon} name="message-circle" size={27} />
          <Icon style={styles.icon} name="send" size={27} />
        </View>
        <Icon name="bookmark" size={27} />
      </View>
      <Text style={styles.likesCount}>{likesCount} 個讚</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>
        {postedAt}
        <Text style={styles.transition}> · 翻譯年糕</Text>
      </Text>
    </View>
  );
};

export default Footer;
