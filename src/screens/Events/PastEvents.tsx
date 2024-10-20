import React, { useEffect, useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import { BASE_URL, api_routes } from '@config/api'
import { SortEvents, Loader, EventsCard } from '@components/index';

const PastEvents = (): React.JSX.Element => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState<boolean>(true)
    const [sortOrder, setSortOrder] = useState<string>('asc')

    const getData = async () => {
        try {
            const response = await fetch(`${BASE_URL}${api_routes.pastEvents}`, {
                method: "GET"
            })
            const result = await response.json()
            const events = result.data
            setData(events)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [sortOrder])

    const toggleSortOrder = () => {
        setLoading(true);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    }

    if (loading) {
        return <Loader />
    }

    const bgImage = require('../../assets/backgrounds/bg-blob.png')
    const pastEvents = sortOrder === 'asc' ? data : data.slice().reverse()

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
            <ImageBackground source={bgImage} resizeMode='cover' style={{ flex: 1 }} >
                <SortEvents sortOrder={sortOrder} toggleSortOrder={toggleSortOrder} />
                <FlatList
                    data={pastEvents}
                    initialNumToRender={10}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <EventsCard item={item} description={true} />}
                />
            </ImageBackground>
        </SafeAreaView >
    )
}

export default PastEvents
