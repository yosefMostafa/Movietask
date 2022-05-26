import React from 'react';
import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    appbar: {

        padding: 10,
        alignSelf: 'stretch',
        alignContent: 'center',

        backgroundColor: '#19214D',

    },
    apptitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
    },
    loader: {


        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    card: {
        backgroundColor: '#19214D',
        borderRadius:20.0,
        margin:10,
        padding:10,
        paddingBottom:20.0

    },
    cardview: {
        backgroundColor: '#19214D',
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    image: {
        flex: 1,

        width: 100.0,

    },
    header: {
        flex:1,
        fontSize: 20,
        fontWeight: '800',
        paddingBottom: 10.0,
        color: '#fff'
    },
    overview: {
        color: '#fff',
        flex: 1,
        fontWeight: '800',
        paddingLeft: 5.0
    },
});
export default styles;