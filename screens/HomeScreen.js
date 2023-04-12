import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image} from "react-native";
import tw from "twrnc";
// twrnc is a library that allows us to use tailwind css in react native


const HomeScreen = () => {
    return (
        // SafeAreaView is a component that makes sure that the content is not hidden behind the status bar
        // tw bg-white h-full is a tailwind css class that sets the background color to white and the height to full for the SafeAreaView
        <SafeAreaView style={tw`bg-white h-full`}> 
            <View style={tw` bg-red-200 p-5`}>
                <Image
                style={{
                    width: 100, 
                    height: 100,
                    resizeMode: "contain"
                }}
                source={{
                    uri: "https://links.papareact.com/gzs"
                }}
                />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    
});