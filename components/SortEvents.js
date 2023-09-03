import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
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
        height: '50@ms',
        width: '50@ms',
        alignSelf: 'flex-end',
        borderRadius: '40@ms',
        alignItems: 'center',
        backgroundColor: '#94CBA0',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1,
        right: '20@ms',
        bottom: '35@ms'
    }
});

export default SortEvents;