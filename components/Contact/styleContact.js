/*
* Stylesheet page contact
*/

import { StyleSheet } from 'react-native';

const contact = StyleSheet.create({
    // Overall container
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Header section - flex 2
    header: {
        flex: 3,
    },
    title: {
        flex: 1,
        fontSize: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    subtitle: {
        flex: 1,
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    // Contact links section - flex 1
    links: {
        flex: 1,
        flexDirection: 'row',
    },
    general: {
        flex: 1,
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center'
    },
    tours: {
        flex: 1,
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center'
    }
});

export default contact;