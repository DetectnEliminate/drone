import { React } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View }from 'react-native';
import { gStyle } from '../styles/style';
import { cord } from './cord';


const Map = () => {
    return (
        <View style={gStyle.container}>  
            <MapView 
                showsUserLocation={true} 
                style={gStyle.map}
                >
                <Marker pinColor='purple' coordinate={cord[0]}/>

            </MapView>
        </View>
    );
}

export default Map;