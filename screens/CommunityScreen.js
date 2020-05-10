import React from 'react';
import {Text,
    ScrollView, 
    StyleSheet, 
    View, 
    Image
} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { ActionButton } from '../components/ActionButton';
import { CurrentLocationButton } from '../components/CurrentLocationButton';
import Events from '../components/Events';
import BottomSheet from 'reanimated-bottom-sheet'
// import firebase from 'firebase'
// import * as FirebaseAPI from '../utils/FirebaseAPI'

export default class CommunityScreen extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      region: null,
      marker: null, // to add a marker anywhere
    }
    
    this._getLocationAsync();
  }
  renderInner = () => (//FOR INNER BAR
    <View style={styles.panel}>
        <Text style={styles.panelTitle}>San Francisco Airport</Text>
        <Text style={styles.panelSubtitle}>
            International Airport - 40 miles away
        </Text>
        <View style={styles.panelButton}>
            <Text style={styles.panelButtonTitle}>Directions</Text>
        </View>
        <View style={styles.panelButton}>
            <Text style={styles.panelButtonTitle}>Search Nearby</Text>
        </View>
        <Image
            style={styles.photo}
            source={require('../assets/images/airport-photo.jpg')}
        />
    </View>
  )
  renderHeader = () => ( //FOR INNER BAR
    <View style={styles.header}>
        <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
        </View>
    </View>
  )
  bs = React.createRef()
  
/*
  componentDidMount(){
    const rootRef = firebase.database().ref();
    const location = rootRef.child('Locations');
    speedRef.on('value',snap =>{
      latitude: snap.val()
    });
  }
*/
  _getLocationAsync = async() => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted')
      console.log('Permission not granted')

    let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true});
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    }
    this.setState({region: region})
  }

  centerMap() {
    const {latitude, longitude, latitudeDelta, longitudeDelta} = this.state.region;
    this.map.animateToRegion({
      latitude, longitude, latitudeDelta, longitudeDelta
    })
  }
  /*openEventBar(){
    this.bs.current.snapTo(0)
  }*/

  render() {
    return(
      <View style={styles.container}>
        <BottomSheet
                ref={this.bs}
                snapPoints={[500, 140, 0]}
                renderContent={this.renderInner}
                renderHeader={this.renderHeader}
                initialSnap={2}
        />
        <ActionButton/>
        <CurrentLocationButton cb={() => {this.centerMap()}}/>
        <MapView
          initialRegion = {this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          ref={(map) => {this.map = map}}
          style={{flex: 1, zIndex: 0}}
          onPress={(e)=> {this.setState({ marker: e.nativeEvent}
            //,FirebaseAPI.storeMarker(e.nativeEvent)
                  //console.log(e)
            ),
            this.bs.current.snapTo(1)
          //THIS IS FOR THE MARKER ON THE MAP
          }}>
          {
            this.state.marker && <MapView.Marker 
            coordinate={this.state.marker.coordinate}
            onPress={()=> this.bs.current.snapTo(0)}
            >
              <Image
                source={require('../assets/images/Logo.png')}
                style={{width: 60,
                height: 40,
                resizeMode: 'contain',
                marginTop: 3,
                marginLeft: -10,}}
              />
            </MapView.Marker>
            //FirebaseAPI.storeMarker(this.state.marker)
            /*<Events event={{uid: 'null',location:{
            latitude: 37.78825,
            longitude: -122.4324,
            }}}/>*/
          }
        </MapView>
      </View>
    );
  }
}

CommunityScreen.navigationOptions = {
  // title: 'Community',
  header: null,
};

const IMAGE_SIZE = 200

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 15,
      backgroundColor: '#fff',
    },
    box: {
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
    },
    panelContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    panel: {
      height: 600,
      padding: 20,
      backgroundColor: '#f7f5eee8',
    },
    header: {
      backgroundColor: '#f7f5eee8',
      shadowColor: '#000000',
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#318bfb',
      alignItems: 'center',
      marginVertical: 10,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    photo: {
      width: '100%',
      height: 225,
      marginTop: 30,
    },
    map: {
      height: '100%',
      width: '100%',
    },
  });

  