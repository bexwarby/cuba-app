import React from 'react';
import {
    Text,
    View,
    StatusBar
} from 'react-native';
import general from './styleGeneral';

export default function Contact() {

    return (
        <View style={general.container}>
            <StatusBar style="dark" />

            <View style={general.header}>
                <Text style={general.title}>
                    Contact Our Team
                </Text>   
            </View>

        </View>
    )
}