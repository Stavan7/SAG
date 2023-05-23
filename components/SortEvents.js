import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import { ScaledSheet } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';

const SortEvents = ({ sortOrder, toggleSortOrder }) => {
    const filterText = sortOrder === 'desc' ? 'Latest events' : 'Older events';

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.filterIcon} onPress={toggleSortOrder}>
                <Feather name={sortOrder === 'desc' ? 'arrow-up' : 'arrow-down'} size={20} color={COLORS.WHITE} />
                <Text style={styles.filterText}>{filterText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = ScaledSheet.create({
    header: {
        width: '40%',
        alignItems: 'center',
        padding: '10@ms',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: '20@ms',
        borderRadius: '5@ms',
        alignItems: 'center',
        marginBottom: '5@ms',
        justifyContent: 'space-between',
        backgroundColor: COLORS.BLACK,
    },
    filterIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterText: {
        fontSize: 16,
        marginLeft: 8,
        color: COLORS.WHITE,
        fontFamily: FONTS.MEDIUM
    },
});

export default SortEvents;