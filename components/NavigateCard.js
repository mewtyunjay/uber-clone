import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import tw from "twrnc";
import { GOOGLE_MAPS_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Greetings, Jay</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        dispatch(
                            setDestination({
                            location: details.geometry.location,
                            description: data.description,
                            }));
                        navigation.navigate('PickUber')
                    }}
                    styles = {toInputBoxStyles}
                    fetchDetails={true}         // this is to get the details of the place (coordinates, address, etc.)
                    returnKeyType={'search'}
                    minLength={2}
                    
                    enablePoweredByContainer={false}
                    query={{                    // this is a query object that is passed to the google places api
                        key: GOOGLE_MAPS_KEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI= 'GooglePlacesSearch'
                    debounce={400}
                    />
                </View>
            <NavFavourites/>
            </View>

            
            <View style = {tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('PickUber')}
                style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}>
                    <Icon name = "car" type='font-awesome' color = 'white' size={16} />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});