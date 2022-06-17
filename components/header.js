import React from 'react';
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const Header = ({ heading }) => {
  return (
    <SafeAreaView>
      <View style={styles.header} >
        <Text style={styles.headingText}>{heading}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  header: {
    margin: '20@vs',
    borderRadius: '10@ms',
    ...Platform.select({
      ios: {
        height: 90,
      },
      android: {
        height: '50@ms',
      },
    }),
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: '23@ms',
    color: '#fff',
    fontFamily: 'PTSerif-Bold'
  },
});

export default Header;