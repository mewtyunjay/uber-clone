import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image} from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
// twrnc is a library that allows us to use tailwind css in react native

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";

import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";


const HomeScreen = () => {

    const dispatch = useDispatch();

    return (
        // SafeAreaView is a component that makes sure that the content is not hidden behind the status bar
        // tw bg-white h-full is a tailwind css class that sets the background color to white and the height to full for the SafeAreaView
        <SafeAreaView style={tw`bg-white h-full`}> 
            <View style={tw`p-5`}>
            {/* <View style={tw`p-5 flex-1 justify-center items-center`}> */}
                <Image
                style={{
                    width: 100, 
                    height: 100,
                    resizeMode: "contain"
                }}
                // style={tw`p-12 flex-1 justify-center items-center`}
                source={{
                    uri: "/Users/mrityunjay/Code/2023/uber-clone/assets/logo.png"
                }}
                />
        
            <GooglePlacesAutocomplete
                placeholder="Where from?" // placeholder text
                styles={{
                    container: {
                        flex: 0, // this is to make sure that the container does not take up the entire screen
                },
                textInput: {
                    fontSize: 18, // font size of the text input
                },
                }}
                onPress={(data, details = null) => {
                    // when a place is selected, data is pushed to the redux store using the dispatch function
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description,
                    }));

                    dispatch(setDestination(null)); // reset the destination every time you go back to the home screen

                }} // this is a callback function that is called when a place is selected

                fetchDetails={true} // this is to get the details of the place (coordinates, address, etc.)
                returnKeyType={'search'} 
                enablePoweredByContainer={false} // remove the powered by google logo
                minLength={2} // minimum number of characters to start searching
                query={{
                    key: GOOGLE_MAPS_KEY,
                    language: "en",
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400} // wait 400ms before making a request
            />

            <NavOptions/>
            <NavFavourites/>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    
});