import React, { PureComponent } from "react";
import { Text, ScrollView } from "react-native";
import styles from "../styles";

class AuthorItem extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <ScrollView style={styles.item}>
        <Text>
          <Text style={styles.bold}>Author ID: </Text>
          {item.id}
        </Text>
        <Text>
          <Text style={styles.bold}>Name: </Text>
          {item.name}
        </Text>
        <Text>
          <Text style={styles.bold}>Username: </Text>
          {item.username}
        </Text>
        <Text>
          <Text style={styles.bold}>Email: </Text>
          {item.email}
        </Text>
      </ScrollView>
    );
  }
}

export default AuthorItem;
