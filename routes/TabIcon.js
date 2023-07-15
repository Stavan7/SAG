import React from "react";
import { Text } from 'react-native';
import COLORS from "../constants/colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScaledSheet, moderateScale } from 'react-native-size-matters'

const TabIcon = ({ focused, name }) => {
    if (focused) {
        return (
            <>
                <Ionicons
                    name={name}
                    color={COLORS.WHITE}
                    size={moderateScale(23)}
                />
                <Text style={styles.dot}>{'\u2B24'}</Text>
            </>
        );
    } else {
        return (
            <Ionicons
                name={name}
                color={COLORS.ICONS}
                size={moderateScale(23)}
            />
        );
    }
};

const styles = ScaledSheet.create({
    dot: {
        color: COLORS.GREEN,
        fontSize: '7@ms',
        marginTop: '3@ms',
    }
});

export default TabIcon