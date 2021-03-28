import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../styles";

const PostItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text>Post ID: {item.id}</Text>
    <Text>Author ID: {item.userId}</Text>
    <Text>Title: {item.title}</Text>
    <Text>Body: {item.body}</Text>
  </TouchableOpacity>
);

export default PostItem;
