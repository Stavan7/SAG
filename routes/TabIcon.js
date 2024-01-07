import React from "react";
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScaledSheet, moderateScale } from 'react-native-size-matters'

const TabIcon = ({ focused, name }) => {
    if (focused) {
        return (
            <>
                <Ionicons
                    name={name}
                    color={'#000'}
                    size={moderateScale(23)}
                />
                <Text style={styles.dot}>{'\u2B24'}</Text>
            </>
        );
    } else {
        return (
            <Ionicons
                name={name}
                color={'#757575'}
                size={moderateScale(23)}
            />
        );
    }
};

const styles = ScaledSheet.create({
    dot: {
        color: '#000',
        fontSize: '7@ms',
        marginTop: '3@ms',
    }
});

export default TabIcon