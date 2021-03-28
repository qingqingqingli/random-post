import React from 'react';
import {Text, ScrollView} from 'react-native';
import styles from '../styles';

const renderAuthorItem = ({item}) => (
  <ScrollView style={styles.item}>
    <Text>Author ID: {item.id}</Text>
    <Text>Name: {item.name}</Text>
    <Text>Username: {item.username}</Text>
    <Text>Email: {item.email}</Text>
    <Text>{'\n'}</Text>
  </ScrollView>
);
export default renderAuthorItem;
