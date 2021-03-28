import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ActivityIndicator, FlatList } from "react-native";
import styles from "../styles";
import PostItem from "./PostItem";

const postURL = "http://jsonplaceholder.typicode.com/posts";
const ItemSeparator = () => <View style={styles.separator} />;

const PostScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(postURL)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  });

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
};

export default PostScreen;
