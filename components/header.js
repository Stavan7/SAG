import React from 'react';
import { View, Text, } from 'react-native';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import { ScaledSheet } from 'react-native-size-matters';

const Header = ({ heading }) => {
  const styles = ScaledSheet.create({
    header: {
      height: '50@ms',
      marginBottom: '20@ms',
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderBottomLeftRadius: '13@ms',
      borderBottomRightRadius: '13@ms',
      backgroundColor: COLORS.GREEN,
    },
    headingText: {
      fontSize: 20,
      color: COLORS.BLACK,
      fontFamily: FONTS.BOLD,
      marginLeft: '20@ms'
    },
  });

  return (
    <View style={styles.header} >
      <Text style={styles.headingText}>{heading}</Text>
    </View>
  );
};

export default Header;
