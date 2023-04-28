import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native' 
import tw from "twrnc"
import Map from '../components/Map';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import PickUber from '../components/PickUber';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const MapScreen = () => {
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
    return (
        <View>
            <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            style={[tw`absolute top-3 left-5 p-3 rounded-full z-50 bg-gray-100`]}
            >
                <Icon name="home" type="fontawesome" />
            </TouchableOpacity>
            <View style={tw`h-1/2`}> 
                <Map/>
            </View>

            <View style={tw`h-1/2`}>
                
                <Stack.Navigator>
                    <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false}}/>
                    <Stack.Screen name="PickUber" component={PickUber} options={{ headerShown: false }}/>
                </Stack.Navigator>
            </View>
        </View>
    );
}

export default MapScreen;

const styles = StyleSheet.create({})