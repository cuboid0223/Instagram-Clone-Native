import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

const StoryScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>story</Text>
      </View>
    </SafeAreaView>
  );
};

export default StoryScreen;
