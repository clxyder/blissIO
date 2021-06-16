import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
const io = require('socket.io-client');

// Replace this URL with your own, if you want to run the backend locally!
// const SocketEndpoint = 'NGROCK LINK';
const SocketEndpoint = 'https://26275d0e.ngrok.io';

export default class LinksScreen extends React.Component {
  state = {
    isConnected: false,
    data: null,
  };
  componentDidMount() {
    const socket = io(SocketEndpoint, {
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      this.setState({ isConnected: true });
    });

    socket.on('ping', data => {
      this.setState(data);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>connected: {this.state.isConnected ? 'true' : 'false'}</Text>
        {this.state.data &&
          <Text>
            ping response: {this.state.data}
          </Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  /*container: {
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
  },*/
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
