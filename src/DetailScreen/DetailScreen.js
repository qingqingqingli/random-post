import React, { useEffect, useState } from "react";
import { View, Button, ActivityIndicator, FlatList, Text } from "react-native";
import styles from "../styles";
import AuthorItem from "./AuthorItem";
import PostItem from "../PostScreen/PostItem";

const authorURL = "http://jsonplaceholder.typicode.com/users";
const ItemSeparator = () => <View style={styles.separator} />;

const DetailScreen = ({ navigation, route }) => {
  const userID = route.params.item.userId;
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch(authorURL)
      .then((response) => response.json())
      .then((data) => (mounted ? setData(data) : null))
      .catch((error) => (mounted ? setError(true) : null))
      .finally(() => (mounted ? setLoading(false) : null));
    return () => {
      mounted = false;
    };
  }, []);

  if (isError === false)
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
            renderItem={({ item }) => <AuthorItem item={item} />}
            ItemSeparatorComponent={ItemSeparator}
          />
        )}
      </View>
    );
  else if (isError || !data)
    return (
      <View style={styles.item}>
        <Text>Error occurred.</Text>
      </View>
    );
};

export default DetailScreen;
