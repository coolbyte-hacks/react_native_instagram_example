import {StyleSheet} from 'react-native';
import colours from '../../theme/colors';
import font from '../..//theme/fonts';

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {flexDirection: 'row', padding: 10, alignItems: 'center'},
  userAvatar: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
  userName: {fontWeight: font.weight.bold, color: colours.black},
  threeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  footer: {
    padding: 10,
  },
  text: {
    color: colours.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: font.weight.bold,
  },
  rightAlign: {
    marginLeft: 'auto',
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colours.black,
    flex: 1,
    lineHeight: 18,
  },
});

export default styles;
