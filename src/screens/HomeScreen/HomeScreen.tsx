import React from 'react';
import {FlatList} from 'react-native';
import FeedPost from '../../components/FeedPosts';
import posts from '../../assets/data/post.json';

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
