import React from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Movies = props => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.goToDetail(props.movie)}>
      <Image
        style={styles.image}
        source={{
          uri: `${props.movie.Poster}`,
        }}
      />
      <Text style={styles.text}>{props.movie.Title} -  {props.movie.Year}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 380,
    borderBottomWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    position: 'relative',
  },
  image: {
    width,
    height: 340,
  },
  text: {
    position: 'absolute',
    left: 10,
    top: 342,
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold',
    color: 'white'
  },
});

export default Movies;
