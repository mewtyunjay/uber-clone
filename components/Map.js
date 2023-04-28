import React, { useEffect, useRef }  from 'react';
import { StyleSheet, Text, View} from 'react-native';
import  Mapview, { Marker }  from 'react-native-maps';
import { useSelector, useDispatch} from 'react-redux';
import tw from "twrnc";
import { selectOrigin, setOrigin, selectDestination, setTravelTimeInformation} from '../slices/navSlice';
import { GOOGLE_MAPS_KEY } from "@env";
import MapViewDirections from 'react-native-maps-directions';


const Map = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapReference = useRef(null); // this is to reference the map to be able to zoom in and out
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!origin || !destination) return; // if origin or destination is not set, then return

        // zoom and fit to the markers
        mapReference.current.fitToSuppliedMarkers(['origin', 'destination'], { 
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }})
    }, [origin, destination])

    // useEffect for calculating the distance and time
    useEffect(() => {
        if (!origin || !destination) return; // if origin or destination is not set, then return

        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
            units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
            })
        }
        getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_KEY])
    
    return (
        <Mapview
        ref={mapReference}
        style = {tw`flex-1`}
        mapType='mutedStandard'
        initialRegion={{
        latitude: origin.location.lat,     
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        }}
        >
        { origin && destination && (    // if origin and destination exist, then render the marker
            <MapViewDirections
            origin = {origin.description}
            destination = {destination.description}
            apikey = {GOOGLE_MAPS_KEY}
            strokeWidth = {3}
            strokeColor = "black"
            />
        )}
        {origin?.location && ( // if origin exists, then render the marker
            <Marker
            coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
            />
        )}
        {destination?.location && ( // destination marker
            <Marker
            coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
            />
        )}

    </Mapview>
    );
}

export default Map;

const styles = StyleSheet.create({})