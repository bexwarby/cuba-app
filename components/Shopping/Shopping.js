/*
* components/Shopping/Shopping - 
* main shopping landing page
*/

import React from 'react';
import {
    Text,
    View,
    StatusBar
} from 'react-native';
import shopping from './styleShopping';

export default function Shopping() {

    return (
        <View style={shopping.container}>
            <StatusBar style="dark" />

            <View>
                <Text style={shopping.title}>
                    Shopping
                </Text>
                <Text style={shopping.subtitle}>
                    Send food or other electrical 
                    goods to Cuban family and friends 
                    today.
                </Text>    
            </View>
        </View>
    )
}