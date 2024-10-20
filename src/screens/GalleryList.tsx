import React, { useEffect, useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    ImageBackground
} from 'react-native'
import { IMAGES } from '@utils/index'
import { COLORS } from '@constants/index'
import { BASE_URL, api_routes } from '@config/api'
import { Loader, EventsCard } from '@components/index'

const GalleryList = (): React.JSX.Element => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState<boolean>(true)

    const getData = async () => {
        try {
            const response = await fetch(`${BASE_URL}${api_routes.pastEvents}`, {
                method: "GET"
            })
            const result = await response.json()
            const sortedData = result.data.sort((a, b) => b.event_id - a.event_id);
            setData(sortedData)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
            <ImageBackground style={{ flex: 1 }} source={IMAGES.bgBlob} resizeMode='cover'>
                <FlatList
                    data={data}
                    initialNumToRender={10}
                    removeClippedSubviews={true}
                    renderItem={({ item }) => <EventsCard item={item} />}
                />
            </ImageBackground>
        </SafeAreaView >
    )
}

export default GalleryList
