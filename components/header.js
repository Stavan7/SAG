import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({ heading }) => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#166d3b', '#233329']}
        style={styles.header}>
        <Text style={styles.headingText}>{heading}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 20,
    borderRadius: 17,
    ...Platform.select({
      ios: {
        height: 90,
      },
      android: {
        height: 50,
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 23,
    color: 'white',
    fontFamily: 'PTSerif-Bold'
  },
});

export default Header;