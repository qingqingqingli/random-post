import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import styles from "../styles";
import PostItem from "./PostItem";

const postURL = "http://jsonplaceholder.typicode.om/posts";
const ItemSeparator = () => <View style={styles.separator} />;

const PostScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch(postURL)
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
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0c9" />
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
              <PostItem
                item={item}
                onPress={() =>
                  navigation.navigate("Detail Screen", { item: item })
                }
              />
            )}
          />
        )}
      </SafeAreaView>
    );
  else if (isError || !data)
    return (
      <View style={styles.item}>
        <Text>Error occurred.</Text>
      </View>
    );
};

export default PostScreen;
