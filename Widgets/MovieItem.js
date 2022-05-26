import {
    Image,
    Text,
    View,
} from 'react-native';
import React from 'react';
import styles from '../styles'





const imagepath = 'https://image.tmdb.org/t/p/original';
export const MovieItem = props => {
    
    const imagewholepath = imagepath + props.poster
    return (
        <View style={styles.card}>
            <View style={styles.cardview}>
                <Text style={styles.header}>{props.title}</Text>

                <Text style={styles.header}>{props.date}</Text>
            </View>

            <View style={styles.cardview}>

                <Image
                
                    style={styles.image}
                    source={{ uri: imagewholepath }}
                    resizeMode="stretch"
                />
                <Text style={styles.overview}>{props.overview}</Text>
            </View>



        </View>
    );
}


