import React from 'react';
import {
    Text,
    View,
    StatusBar
} from 'react-native';
import home from './styleHome';

export default function Home() {

    return (
        <View style={home.container}>
            <StatusBar style="dark" />

            <View>
                <Text style={home.title}>
                    {/*TO DO - replace 2021 with actual 
                    date function*/}
                    Cuba - 2021
                </Text>
                <Text style={home.subtitle}>
                    Travel tips, shopping possibilities, 
                    reality insights and more!
                </Text>    
            </View>
        </View>
    )
}