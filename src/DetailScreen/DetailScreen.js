import * as React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Styles from '../Styles';
import {useEffect, useState} from 'react';
import renderAuthorItem from './RenderAuthor';

const authorURL = 'http://jsonplaceholder.typicode.com/users';
const ItemSeparator = () => <View style={Styles.separator} />;

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
    <View style={Styles.container}>
      <Text>Detail Screen</Text>
      <Text>ID: {userID}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
      {isLoading ? (
        <View style={Styles.loader}>
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
