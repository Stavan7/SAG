import React, { useEffect, useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import Loader from '../components/Loader';
import Header from "../components/Header";
import { ScaledSheet } from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
import EventsCard from '../components/Events/EventsCard';

const GalleryList = ({ navigation }) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const snapshot = await firestore().
                collection("PastEvents")
                .orderBy("id", "desc")
                .get();
            const response = snapshot.docs.map(doc => doc.data());
            setData(response);
            setLoading(false)
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        getData();
    }, [getData])

    if (loading) {
        return <Loader />
    }
    const bgImage = require('../assets/backgrounds/bgBlob.jpeg')

    return (
        <SafeAreaView style={styles.container}>
            <Header heading="Gallery" />
            <ImageBackground style={{ flex: 1 }} source={bgImage} resizeMode='contain'>
                <FlatList
                    data={data}
                    initialNumToRender={10}
                    renderItem={({ item }) => <EventsCard item={item} navigation={navigation} />}
                />
            </ImageBackground>
        </SafeAreaView >
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginBottom: '59@ms',
        backgroundColor: 'transparent'
    },
    eventContainer: {
        height: '150@ms',
        elevation: 23,
        flexDirection: 'row',
        marginVertical: '10@ms',
        marginHorizontal: '20@ms',
        shadowOffset: {
            width: 0,
            height: '11@vs',
        },
        padding: '10@ms',
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        backgroundColor: '#757575',
        borderRadius: '10@ms',
        borderColor: 'transparent',
        shadowColor: COLORS.BLACK,
    },
    image: {
        width: '41%',
        aspectRatio: 1,
        alignSelf: 'center',
        borderTopLeftRadius: '10@ms',
        borderBottomLeftRadius: '10@ms'
    },
    textContainer: {
        flex: 1,
        padding: '10@s',
        justifyContent: 'center',
        borderTopRightRadius: '10@ms',
        borderBottomRightRadius: '10@ms',
    },
    title: {
        fontSize: '17@ms',
        color: '#000',
        textAlign: 'center',
        fontFamily: FONTS.BOLD,
    },
    date: {
        fontSize: '15@ms',
        marginTop: '10@ms',
        color: '#000',
        textAlign: 'center',
        fontFamily: FONTS.BOLD,
    }
})

export default GalleryList