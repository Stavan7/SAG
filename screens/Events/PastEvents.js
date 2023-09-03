import React, { useEffect, useState } from 'react'
import {
    FlatList,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import FONTS from '../../constants/fonts';
import Loader from '../../components/Loader';
import SortEvents from '../../components/SortEvents';
import { ScaledSheet } from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';
import EventsCard from '../../components/Events/EventsCard';

const PastEvents = ({ navigation }) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    const [sortOrder, setSortOrder] = useState('desc')

    const getData = async () => {
        try {
            const snapshot = await firestore()
                .collection("PastEvents")
                .orderBy("id", sortOrder)
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

    const toggleSortOrder = () => {
        setLoading(true);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    }

    if (loading) {
        return <Loader />
    }

    const bgImage = require('../../assets/backgrounds/bgBlob.jpeg')

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={bgImage} resizeMode='cover' style={{ flex: 1 }} >
                <SortEvents sortOrder={sortOrder} toggleSortOrder={toggleSortOrder} />
                <FlatList
                    data={data}
                    initialNumToRender={10}
                    renderItem={({ item }) =>
                        <EventsCard
                            item={item}
                            navigation={navigation} description
                        />}
                    showsVerticalScrollIndicator={false}
                />
            </ImageBackground>

        </SafeAreaView >
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginTop: '10@ms',
        marginBottom: '59@ms',
    },
    eventContainer: {
        height: '95@s',
        elevation: 5,
        flexDirection: 'row',
        marginVertical: '10@ms',
        marginHorizontal: '12@ms',
        shadowOffset: {
            width: 0,
            height: '11@vs',
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        backgroundColor: '#fff',
        borderRadius: '10@ms',
        borderColor: 'transparent',
        shadowColor: '#000',
    },
    imageContainer: {
        margin: 10,
        width: '32%',
        overflow: 'visible',
        borderRadius: '10@ms',
        backgroundColor: '#94CBA0',
    },
    image: {
        aspectRatio: 1,
        marginTop: -8,
        width: '140%',
        height: '124%',
        alignSelf: 'center'
    },
    textContainer: {
        flex: 1,
        padding: '8@s',
        justifyContent: 'center',
        borderTopRightRadius: '10@ms',
        borderBottomRightRadius: '10@ms',
    },
    title: {
        fontSize: '15@ms',
        color: '#000',
        textAlign: 'left',
        fontFamily: FONTS.BOLD,
    },
    date: {
        textAlign: 'left',
        fontSize: '14@ms',
        marginTop: '5@ms',
        color: '#000',
        fontFamily: FONTS.BOLD
    },
    description: {
        fontSize: '13@ms',
        marginTop: '5@ms',
        textAlign: 'left',
        lineHeight: '20@ms',
        color: '#000',
        fontFamily: FONTS.MEDIUM
    }
})


export default PastEvents