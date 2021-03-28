import React, { useEffect, useState } from "react";
import { View, Button, ActivityIndicator, FlatList } from "react-native";
import styles from "../styles";
import AuthorItem from "./AuthorItem";

const authorURL = "http://jsonplaceholder.typicode.com/users";
const ItemSeparator = () => <View style={styles.separator} />;

const DetailScreen = ({ navigation, route }) => {
  const userID = route.params.item.userId;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(authorURL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  });

  return (
    <View style={styles.container}>
      <Button title="Back to all posts" onPress={() => navigation.goBack()} />
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      ) : (
        <FlatList
          data={data.filter((x) => x.id === userID)}
          keyExtractor={(item) => item.id}
          renderItem={AuthorItem}
          ItemSeparatorComponent={ItemSeparator}
        />
      )}
    </View>
  );
};

export default DetailScreen;
