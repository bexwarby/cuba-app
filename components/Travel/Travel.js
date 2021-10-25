/*
* components/Travel/Travel - 
* main travel landing page
*/

import React from 'react';
import {
    Text,
    View,
    StatusBar
} from 'react-native';
import travel from './styleTravel';

export default function Travel() {

    return (
        <View style={travel.container}>
            <StatusBar style="dark" />
            <View>
                <Text style={travel.title}>
                    Travel
                </Text>
            </View>
        </View>
    )
}