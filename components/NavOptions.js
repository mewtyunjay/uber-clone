import React from "react";
import {Text, View, FlatList, TouchableOpacity, Image} from "react-native";
import tw from "twrnc";
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "/Users/mrityunjay/Code/2023/uber-clone/assets/taxi.png",
        screen: "MapScreen", // two screens. once clicked, it goes to MapScreen.js
    }
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin); // get the origin from the redux store
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            // contentContainerStyle={{ flexGrow: 1 }} 
            renderItem={({item}) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style = {tw` p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2`}
                // style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 w-full`}
                disabled={!origin} // if origin does not exist, then disable the button
                >
                <View style={[!origin && { opacity: 0.2 }]}>
                    <Image 
                        style={{ width: 200, height: 200, resizeMode: "contain" }}
                        source={{uri: item.image}}
                    />
                    <Text style ={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name = 'arrowright' color='white' type='antdesign'/>
                </View>
            </TouchableOpacity>
            )}
        />
    );
    }

export default NavOptions;