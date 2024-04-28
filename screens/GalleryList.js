import React, { useEffect, useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import COLORS from '../constants/colors';
import Loader from '../components/Loader';
import Header from "../components/Header";
import { BASE_URL, api_routes } from '../config/api';
import { ScaledSheet } from 'react-native-size-matters';
import EventsCard from '../components/Events/EventsCard';

const GalleryList = ({ navigation }) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch(`${BASE_URL}${api_routes.pastEvents}`, {
                method: "GET"
            })
            const result = await response.json()
            setData(result.data)
            setLoading(false)
        } catch (error) {
            setLoading(false);
            console.log(error)
            setError(error.message);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    if (loading) {
        return <Loader />
    }

    const bgImage = require('../assets/backgrounds/bg-blob.png')

    return (
        <SafeAreaView style={styles.container}>
            <Header heading="Gallery" />
            <ImageBackground style={{ flex: 1 }} source={bgImage} resizeMode='cover'>
                <FlatList
                    data={data}
                    initialNumToRender={10}
                    removeClippedSubviews={true}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <EventsCard item={item} navigation={navigation} />}
                />
            </ImageBackground>
        </SafeAreaView >
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    }
})

export default GalleryList