import {
    SafeAreaView,
    ToastAndroid,
    StyleSheet,
    Platform,
    AlertIOS,
    ActivityIndicator,
    Text,
    View,
    FlatList,
} from 'react-native';
import React from 'react';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { MovieItem } from './MovieItem'
import styles from '../styles'

import { fetchMovies } from '../api/api'


export class Movies extends React.Component {
    constructor() {
        super()
        this.onEndReachedCalledDuringMomentum = true;
    }

    state = {
        Movieslist: [],
        Loading: true,
        nextpage: 1,
        sideloader: false,
    }
    componentDidMount() {

        this.loadMovies(this.state.nextpage);
    }
      check(allmovies){
       
        const uniqueIds = [];

        const uniqueMovies = allmovies.filter(element => {
          const isDuplicate = uniqueIds.includes(element.id);
      
          if (!isDuplicate) {
            uniqueIds.push(element.id);
      
            return true;
          }
      
          return false;
        });
      
        return uniqueMovies
    }
    loadMovies = async (page) => {
        try {
            let MoviesListRetrieved = await fetchMovies(page);
            let allmovies=[...this.state.Movieslist, ...MoviesListRetrieved]
          
            let checked=this.check(allmovies)
            this.setState({
                Movieslist:checked,
                Loading: false,
                nextpage: this.state.nextpage + 1,
                sideloader: false,
            })
            // console.log(this.state.Movieslist);
        } catch (err) {

            if (Platform.OS === 'android') {
                ToastAndroid.show(err, ToastAndroid.SHORT)
            } else {
                AlertIOS.alert(err);
            }
        }
    }
    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <CustomAppbar></CustomAppbar>
                {this.state.Loading
                    ?
                    <View style={styles.loader}
                    >
                        <ActivityIndicator size='large' />
                    </View>
                    : <FlatList

                        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                        onEndReached={({ distanceFromEnd }) => {
                            if (!this.onEndReachedCalledDuringMomentum) {
                                this.setState({
                                    sideloader: true
                                })
                                this.loadMovies(this.state.nextpage)
                                this.onEndReachedCalledDuringMomentum = true
                            }
                        }
                        }
                        data={this.state.Movieslist}
                        renderItem={(movie) => {

                         
                            return (<MovieItem poster={movie.item.poster} title={movie.item.title} date={movie.item.date}
                                overview={movie.item.overview}

                            />)

                        }

                        }
                        keyExtractor={item => item.id}

                    >



                    </FlatList>

                }
                {this.state.sideloader ?
                    <View><ActivityIndicator /></View> : <View></View>}

            </SafeAreaView>

        );
    }

}
const backgroundStyle = {
    backgroundColor: Colors.lighter,
};



class CustomAppbar extends React.Component {

    render() {
        return (<View style={styles.appbar}>

            <Text style={styles.apptitle}> {"Movies"}</Text>
        </View>);
    }
}
