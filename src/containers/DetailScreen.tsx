import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView,
  Animated,
  SafeAreaView,
} from 'react-native';
import API from '../services/Api';

const {width, height} = Dimensions.get('screen');

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0),
      movie: null,
      loading: true,
      comicsNumber: 0,
      eventsNumber: 0,
      seriesNumber: 0,
      storiesNumber: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params.movie.imdbID)
    this.getMovie(this.props.navigation.state.params.movie.imdbID)
  }

  componentWillReceiveProps() {
    console.log(this.props.navigation.state.params.movie.imdbID)
    this.getMovie(this.props.navigation.state.params.movie.imdbID)
  }

  getMovie = id => {
    API.getMovieById(id, {orderBy: '-onsaleDate'})
      .then(res => {
        console.log(res)
        this.setState({
          movie: res,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({error: err, loading: false});
      });
  };

  rendermovie = () => {
    return (
          <ScrollView
            style={styles.container}
            scrollEventThrottle={16}
            >
            <View style={styles.profile}>
              <View style={{alignItems: 'center'}}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `${this.state.movie.Poster}`,
                  }}
                />
                <Text style={styles.nameTitle}>
                  {this.state.movie.Title}
                </Text>
                <Text style={styles.description}>
                  {this.state.movie.Actors}
                </Text>
                <Text style={styles.description}>
                  {this.state.movie.Plot}
                </Text>
              </View>
        
              <Text style={styles.nameTitleMain}>
                movie stats have appeared in:
              </Text>
            </View>
          </ScrollView>
      
    );
  };

  render() {
    const {animatedValue} = this.state;
    const {navigation} = this.props;

    if (navigation.state.params === undefined) {
      return (
        <View style={styles.container}>
          <View style={styles.bgImageWrapper}>
            <Image
              source={require('../assets/m.png')}
              style={styles.bgImage}
            />
          </View>
          <Text style={styles.welcome}>Please select a Movie!</Text>
        </View>
      );
    } else {
      const movie = navigation.state.params.movie;
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            {this.state.loading ? (
              <View>
                <View style={styles.bgImageWrapper}>
                  <Image
                    source={require('../assets/m.png')}
                    style={styles.bgImage}
                  />
                  <ActivityIndicator style={styles.loaderImg} size="large" />
                </View>
              </View>
            ) : (
              this.rendermovie()
            )}
          </View>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  profile: {},
  comicContainer: {
    padding: 10,
    alignItems: 'center',
  },
  movie: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  description: {
    color: 'white',
    backgroundColor: 'black',
    padding: 10,
  },
  sectionTitle: {
    alignSelf: 'flex-start',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width,
    height: 450,
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 320,
    color: 'white',
  },
  nameTitle: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  nameTitleMain: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
  },
});
