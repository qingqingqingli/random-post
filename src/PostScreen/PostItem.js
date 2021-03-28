import React, {PureComponent} from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../styles";

class PostItem extends PureComponent {
  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text>Post ID: {item.id}</Text>
        <Text>Author ID: {item.userId}</Text>
        <Text>Title: {item.title}</Text>
        <Text>Body: {item.body}</Text>
      </TouchableOpacity>
    );
  }
}

export default PostItem;
