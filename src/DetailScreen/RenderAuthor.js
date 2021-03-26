import React from 'react';
import {View, Text, ScrollView, Pressable, Alert} from 'react-native';
import Styles from '../Styles';

const renderAuthorItem = ({item}) => (
  <ScrollView style={Styles.item}>
    <Text>Author ID: {item.id}</Text>
    <Text>Name: {item.name}</Text>
    <Text>Username: {item.username}</Text>
    <Text>Email: {item.email}</Text>
    <Text>{'\n'}</Text>
  </ScrollView>
);
export default renderAuthorItem;
