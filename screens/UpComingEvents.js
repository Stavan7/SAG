import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import firestore from '@react-native-firebase/firestore'
import { ScaledSheet } from 'react-native-size-matters';
import NoUpComingEvents from '../components/NoUpComingEvents';
import UpComingEventsData from '../components/UpComingEventsData';

const UpComingEventsScreen = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const snapshot = await firestore().collection("UpcomingEvents").get();
        const data = snapshot.docs.map(doc => doc.data());
        return data;
    }

    useEffect(() => {
        getData().then(data => setData(data));
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {
                data.length === 0 ? <NoUpComingEvents /> : <UpComingEventsData data={data} />
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