import React from 'react'
import COLORS from '../constants/colors';
import { ActivityIndicator } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const Loader = () => {
    return <ActivityIndicator
        size={35}
        color={COLORS.BLACK}
        shouldRasterizeIOS={true}
        style={styles.activityIndicator}
    />
}

const styles = ScaledSheet.create({
    activityIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Loader