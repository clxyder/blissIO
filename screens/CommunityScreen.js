import React from 'react';
import {
    StyleSheet, 
    View,
} from 'react-native';
import Map from '../components/Map'
// import firebase from 'firebase'
// import * as FirebaseAPI from '../utils/FirebaseAPI'
export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <Map/>
    </View>
  );
}

CommunityScreen.navigationOptions = {
  // title: 'Community',
  header: null,
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 15,
      backgroundColor: '#fff',
    },
  });

  