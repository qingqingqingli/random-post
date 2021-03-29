import React, { PureComponent } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../styles";

class PostItem extends PureComponent {
  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text>
          <Text style={styles.bold}>Post ID: </Text>
          {item.id}
        </Text>
        <Text>
          <Text style={styles.bold}>Author ID: </Text>
          {item.userId}
        </Text>
        <Text>
          <Text style={styles.bold}>Title: </Text>
          {item.title}
        </Text>
        <Text>
          <Text style={styles.bold}>Body: </Text>
          {item.body}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default PostItem;
