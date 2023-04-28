import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';


const data = [
    {
        id: "meter-X-123",
        title: "meter X",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "meter-XL-456",
        title: "meter XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "meter-LUX-789",
        title: "meter LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
];

// surge price multiplier
const SURGE_CHARGE_RATE = 1.5;

const PickUber = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

    return (
        <SafeAreaView style ={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate("NavigateCard")} 
                style ={[tw`absolute top-3 left-5 p-3 rounded-4 z-50`]}
                >
                    <Icon name = "chevron-left" type = "fontawesome" />
                </TouchableOpacity> 
                <Text style={tw`text-center py-5 text-xl`}>Pick a Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>

            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item: {id, title, multiplier, image}, item }) => (
                <TouchableOpacity
                onPress={() => setSelected(item)} 
                style = {[tw`flex-row justify-between items-center px-10 ${id === selected?.id && 'bg-gray-200'}`]}>
                    <Image
                    style = {{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                    source={{ uri: image }}
                    />
                    <View style = {tw`-ml-6`}>
                        <Text style ={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
                    </View>
                    <Text style={tw`text-xl`}>
                        
                        {new Intl.NumberFormat('en-in', {
                            style: 'currency',
                            currency: 'INR',
                        }).format(
                            (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 10
                        )
                        }
                    </Text>
                </TouchableOpacity>
            )}
            />
            <View style ={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity 
                disabled = {!selected}
                style = {tw`bg-black py-3 m-4 ${!selected && 'bg-gray-100'} `}>
                    <Text style ={tw`text-center text-white text-xl`}>Confirm {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default PickUber;