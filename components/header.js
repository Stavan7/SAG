import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from 'react-native';

const Header = ({ heading }) => {
  return (
    <SafeAreaView>
      <View style={styles.header} >
        <Text style={styles.headingText}>{heading}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 20,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        height: 90,
      },
      android: {
        height: 50,
      },
    }),
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 23,
    color: '#fff',
    fontFamily: 'PTSerif-Bold'
  },
});

export default Header;