import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import Loader from '../../components/Loader';
import { ScaledSheet } from 'react-native-size-matters';
import UpComing from '../../components/Events/UpComing';
import { BASE_URL, api_routes } from '../../config/api';
import NoUpComingEvents from '../../components/Events/NoUpComingEvents';

const UpComingEvents = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch(`${BASE_URL}${api_routes.upcomingEvents}`, {
                method: "GET"
            })
            const result = await response.json()
            setData(result.data)
            setLoading(false)
        }
        catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        getData();
    }, [data])

    if (loading) {
        return <Loader />
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                data.length === 0 ? <NoUpComingEvents /> :
                    <UpComing data={data} />
            }
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    }
})

export default UpComingEvents