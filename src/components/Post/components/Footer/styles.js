import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  iconContainer: {
    paddingTop: 5,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  iconWrap: {
    flexDirection: 'row',
    flex: 1,
    color: '#545454',
  },
  icon: {
    paddingRight: 15,
  },

  likesCount: {
    fontWeight: 'bold',
  },
  caption: {
    paddingTop: 10,
  },
  postedAt: {
    color: 'gray',
    paddingTop: 10,
  },
  transition: {
    color: 'black',
    fontWeight: '400',
  },
});

export default styles;
