import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    borderRadius: 40,
    height: '93%',
    margin: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  postedTime: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textInput__icon: {
    marginHorizontal: 15,
  },
});

export default styles;
