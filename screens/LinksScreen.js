import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.chat}>
        <View style={styles.mainPanel}>
          <View style={styles.content}>
            <View style={styles.header}>
              <View class="chat-details">
                <Text id="topic-id"> Yo</Text>
                <Text id="sequence-number"> Bruh</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101212',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chat: {
    backgroundColor: 'grey',
    padding: 0,
    height: 100,
    width: 100,
    display: 'flex',
  },
  mainPanel: {
    backgroundColor: 'snow',
    padding: 2,
    width: 100,
  },
  content: {
    backgroundColor: '#ffffff',
    height: 100,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fafbff',
    justifyContent: 'space-between',
    display: 'flex',
    height: 80,
    padding: 20,
  },
});
