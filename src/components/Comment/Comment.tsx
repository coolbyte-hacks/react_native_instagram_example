import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import colours from '../../theme/colors';
import {IComment} from '../../types/models';

interface IFeedComment {
  comment: IComment;
}

const Comment = ({comment}: IFeedComment) => {
  var isLiked = false;
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.userName}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign
        name={isLiked ? 'heart' : 'hearto'}
        size={14}
        style={styles.icon}
        color={colours.black}
      />
    </View>
  );
};

export default Comment;
