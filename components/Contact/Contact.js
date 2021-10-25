import React from 'react';
import {
    Text,
    View,
    StatusBar
} from 'react-native';
import contact from './styleContact';

export default function Contact() {

    return (
        <View style={contact.container}>
            <StatusBar style="dark" />

            <View style={contact.header}>
                <Text style={contact.title}>
                    Contact Us Today
                </Text>
                <Text style={contact.subtitle}>
                    Our team and contacts in Cuba and
                    worldwide are always here to help
                </Text>    
            </View>

            <View style={contact.links}>
                <Text style={contact.general}>General</Text>
                <Text style={contact.tours}>Tour Operators</Text>
            </View>

        </View>
    )
}