import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native'
import COLORS from '../constants/colors';
import { ScaledSheet } from 'react-native-size-matters';
import Octicons from 'react-native-vector-icons/Octicons';

const SortEvents = ({ sortOrder, toggleSortOrder }) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.filterIcon} onPress={toggleSortOrder}>
                <Octicons name={sortOrder === 'desc' ? 'sort-asc' : 'sort-desc'} size={30} color={'black'} />
            </TouchableOpacity>
        </View>
    );
};

const styles = ScaledSheet.create({
    header: {
        zIndex: 1,
        height: '50@ms',
        width: '50@ms',
        right: '20@ms',
        bottom: '35@ms',
        alignSelf: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        borderRadius: '40@ms',
        backgroundColor: COLORS.GREEN,
    }
});

export default SortEvents;