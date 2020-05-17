import * as React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native'

export default function Messages(props) {
  return (
    <FlatList
      data={props.DATA}
      renderItem={({item})=><Text style={styles.item}>{item.key}</Text>}
    />
  );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })