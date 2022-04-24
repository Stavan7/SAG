import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import COLORS from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({ heading }) => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#233329', '#166d3b']}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        style={styles.header}>
        <Text style={styles.headingText}>{heading}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.bottomTabBg,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    margin: 20,
    ...Platform.select({
      ios: {
        height: 90,
      },
      android: {
        height: 50,
      },
    }),
  },
  headingText: {
    fontSize: 23,
    color: 'white',
    fontFamily: 'Muli',
  },
});

export default Header;
