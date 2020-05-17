import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
    <View class="chat">
      <View class="main-panel">
        <View class="content">
          <View class="header">
            <View class="chat-details">
              <Text id="topic-id"> </Text>
              <Text id="sequence-number"> </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chat: {
    backgroundColor: 'grey',
    padding: 0,
    height: 100,
    width: 100,
    display: 'flex',
  },
});
