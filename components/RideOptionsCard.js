import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import tw from "twrnc";
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const RideOptionsCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Text>Pick a ride</Text>
        </SafeAreaView>
    );
};

export default RideOptionsCard;
