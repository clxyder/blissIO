import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

export const ActionButton = function(props) {
    const cb = props.cb ? props.cb : () => console.log('No callback function!')
    const [value, onChangeText] = React.useState('How will you change your world?');
    return (
        <TouchableOpacity onPress={() => {cb()}} style={styles.container}>
            <View style={styles.leftCol}>
                <Text style={{fontSize: 9}}>{'\u25A0'}</Text>
            </View>
            {/* <View style={styles.centerCol}>
                <Text style={{fontSize: 18, color: '#545454'}}>
                    How will you change your world?
                </Text>
            </View> */}
            <TextInput style={styles.centerCol}
                onChangeText={text => onChangeText(text)}
                value={value}/>
            <View style={styles.rightCol}>
                <Ionicons name='md-globe' color = '#000000' size={24} style={{alignSelf: 'center'}}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: 'absolute',
        flexDirection: 'row',
        width: (WIDTH-40),
        height: 60,
        top: 60,
        left: 20,
        borderRadius: 2,
        backgroundColor: 'white',
        shadowColor: '#000000',
        alignItems: 'center',
        elevation: 3,
        shadowRadius: 1.5,
        shadowOpacity: 0.3,
    },
    leftCol: {
        flex: 1,
        alignItems: 'center'
    },
    centerCol:{
        flex: 4,
        fontSize: 14.4,
        // height: 40, 
        // borderColor: 'gray', 
        // borderWidth: 1,
    },
    rightCol: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
    },
})
