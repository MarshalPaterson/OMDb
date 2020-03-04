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
      movie: null,
      loading: true,
    };
  }

  componentDidMount() {
    // if(this.props.navigation.state.params !== undefined) {
    //   this.getMovie(this.props.navigation.state.params.movie.imdbID)
    // }

    this.load();
    this.props.navigation.addListener('willFocus', this.load);
  }

  load = () => {
    this.getMovie(this.props.navigation.state.params.movie.imdbID);
  };

  getMovie = id => {
    API.getMovieById(id)
      .then(res => {
        console.log(res);
        this.setState({
          movie: res,
          poster: res.Poster,
          loading: false,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({error: err, loading: false});
      });
  };

  render() {
    const {navigation} = this.props;
    console.log(navigation.state.params);

    if (this.state.movie === null) {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <View style={styles.bgImageWrapper}>
              <Image
                source={require('../assets/st.jpg')}
                style={styles.bgImage}
              />
            </View>
            <Text style={styles.welcome}>Please select a Star Trek movie!</Text>
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            {this.state.loading ? (
              <View>
                <View style={styles.bgImageWrapper}>
                  <Image
                    source={require('../assets/logo.png')}
                    style={styles.bgImage}
                  />
                  <Text style={styles.textItem}>OMDb - Star Trek</Text>
                  <ActivityIndicator style={styles.loaderImg} size="large" />
                </View>
              </View>
            ) : (
              <ScrollView style={styles.container} scrollEventThrottle={16}>
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
                    <Text style={styles.description}>
                      {this.state.movie.Language}
                    </Text>
                    <Text style={styles.description}>
                      {this.state.movie.Runtime}
                    </Text>
                  </View>
                </View>
              </ScrollView>
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
    fontSize: 22,
    textAlign: 'center',
    marginTop: 320,
    color: 'white',
    fontWeight: 'bold',
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
