import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { COLORS } from '@constants/index';
import Octicons from 'react-native-vector-icons/Octicons'

interface EventProps {
    sortOrder: string;
    toggleSortOrder: () => void
}
const SortEvents: React.FC<EventProps> = ({ sortOrder, toggleSortOrder }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={toggleSortOrder}>
                <Octicons name={sortOrder === 'desc' ? 'sort-asc' : 'sort-desc'} size={30} color={'black'} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        zIndex: 1,
        height: 50,
        width: 50,
        right: 20,
        bottom: 35,
        borderRadius: 40,
        alignSelf: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: COLORS.GREEN,
    }
});

export default SortEvents;