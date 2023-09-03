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
  const styles = ScaledSheet.create({
    header: {
      ...Platform.select({
        ios: {
          height: 90,
        },
        android: {
          height: '50@ms',
        },
      }),
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
    <SafeAreaView>
      <View style={styles.header} >
        <Text style={styles.headingText}>{heading}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;