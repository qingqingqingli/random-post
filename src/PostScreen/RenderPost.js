import * as React from 'react';
import {
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Styles from '../Styles';

const PostItem = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={Styles.item}>
    <Text>Post ID: {item.id}</Text>
    <Text>Author ID: {item.userId}</Text>
    <Text>Title: {item.title}</Text>
    <Text>Body: {item.body}</Text>
    <Text>{'\n'}</Text>
  </TouchableOpacity>
);

export default PostItem;
