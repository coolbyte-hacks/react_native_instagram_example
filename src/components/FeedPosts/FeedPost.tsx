import {useState} from 'react';
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import colours from '../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import Comment from '../Comment';
import {IComment, IPost} from '../../types/models';
import DoublePressable from '../DoublePressable';

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({post}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(v => !v);
  };
  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.userName}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colours.accent : colours.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colours.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colours.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={styles.rightAlign}
            color={colours.black}
          />
        </View>
        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>me</Text> and{' '}
          <Text style={styles.bold}>{post.noOfLikes} others</Text>
        </Text>
        {/* Description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 1}>
          <Text style={styles.bold}>{post.user.userName}</Text>{' '}
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'Less' : 'More'}
        </Text>
        {/* Comments */}
        <Text style={styles.text}>View all {post.noOfComments} comments</Text>
        {post.comments.map((comment: IComment) => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Posted Date */}
        <Text> {post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
