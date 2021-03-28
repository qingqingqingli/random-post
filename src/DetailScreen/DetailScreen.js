import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from '../styles';
import renderAuthorItem from './RenderAuthor';

const authorURL = 'http://jsonplaceholder.typicode.com/users';
const ItemSeparator = () => <View style={styles.separator} />;

const DetailScreen = ({navigation, route}) => {
  const userID = route.params.item.userId;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(authorURL)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => alert(error))
      .finally(() => setLoading(false));
  });

  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Text>ID: {userID}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      ) : (
        <FlatList
          data={data.filter(x => x.id === userID)}
          keyExtractor={item => item.id}
          renderItem={renderAuthorItem}
          ItemSeparatorComponent={ItemSeparator}
        />
      )}
    </View>
  );
};

export default DetailScreen;
