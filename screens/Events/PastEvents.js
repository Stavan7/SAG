import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import FONTS from '../../constants/fonts';
import COLORS from '../../constants/colors';
import Loader from '../../components/Loader';
import FastImage from 'react-native-fast-image'
import SortEvents from '../../components/SortEvents';
import { ScaledSheet } from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';

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

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('NoBottomTab', { screen: 'EventsDetail', params: item })}>
                <View style={styles.eventContainer}>
                    <FastImage
                        resizeMode='contain'
                        style={styles.image}
                        source={{ uri: item.cardImage }}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                        <Text style={styles.description} numberOfLines={3} >{item.shortDescription}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <SortEvents sortOrder={sortOrder} toggleSortOrder={toggleSortOrder} />
            <FlatList
                data={data}
                initialNumToRender={10}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView >
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginTop: '20@ms',
        marginBottom: '59@ms',
        backgroundColor: 'transparent'
    },
    eventContainer: {
        elevation: 23,
        flexDirection: 'row',
        marginVertical: '10@ms',
        marginHorizontal: '20@ms',
        shadowOffset: {
            width: 0,
            height: '11@vs',
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        backgroundColor: '#fff',
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
        backgroundColor: COLORS.BLACK,
        borderTopRightRadius: '10@ms',
        borderBottomRightRadius: '10@ms',
    },
    title: {
        fontSize: '17@ms',
        color: COLORS.WHITE,
        textAlign: 'left',
        fontFamily: FONTS.BOLD,

    },
    date: {
        textAlign: 'left',
        fontSize: '15@ms',
        marginTop: '8@ms',
        color: COLORS.WHITE,
        fontFamily: FONTS.BOLD
    },
    description: {
        fontSize: '13@ms',
        marginTop: '10@ms',
        textAlign: 'left',
        lineHeight: '20@ms',
        color: COLORS.WHITE,
        fontFamily: FONTS.MEDIUM
    }
})

export default PastEvents