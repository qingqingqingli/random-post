import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import styles from "../styles";
import PostItem from "./PostItem";
import { extractApiData } from "../extractApiData";

const postURL = "http://jsonplaceholder.typicode.com/posts";
const ItemSeparator = () => <View style={styles.separator} />;

const PostScreen = ({ navigation }) => {
  const { isLoading, data, isError } = extractApiData(postURL);

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
