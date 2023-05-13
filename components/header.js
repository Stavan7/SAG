import React from 'react';
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
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
    borderRadius: '10@ms',
    ...Platform.select({
      ios: {
        height: 90,
      },
      android: {
        height: '50@ms',
      },
    }),
    margin: '10@ms',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20@ms',
    backgroundColor: COLORS.BLACK,
  },
  headingText: {
    fontSize: '20@ms',
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD
  },
});

export default Header;