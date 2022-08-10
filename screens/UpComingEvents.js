import React from 'react'
import data from '../data/data';
import { SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import NoUpComingEvents from '../components/NoUpComingEvents';
import UpComingEventsData from '../components/UpComingEventsData';

const upcomingevents = data.UpComingEvents;

const UpComingEventsScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            {
                upcomingevents.length === 0 ? <NoUpComingEvents /> : <UpComingEventsData />
            }
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginBottom: '65@ms',
        backgroundColor: 'transparent'
    }
})

export default UpComingEventsScreen