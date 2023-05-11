import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import COLORS from '../constants/colors';
import firestore from '@react-native-firebase/firestore'
import { ScaledSheet } from 'react-native-size-matters';
import NoUpComingEvents from '../components/NoUpComingEvents';
import UpComingEventsData from '../components/UpComingEventsData';

const UpComingEventsScreen = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const snapshot = await firestore().collection("UpcomingEvents").get();
            const response = snapshot.docs.map(doc => doc.data());
            setData(response)
            setLoading(false)
        }
        catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        getData();
    }, [getData])

    if (loading) {
        return <ActivityIndicator
            size={35}
            color={COLORS.BLACK}
            shouldRasterizeIOS={true}
            style={styles.activityIndicator}
        />
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                data.length === 0 ? <NoUpComingEvents /> :
                    <UpComingEventsData data={data} />
            }
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginBottom: '65@ms',
        backgroundColor: 'transparent'
    },
    activityIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default UpComingEventsScreen