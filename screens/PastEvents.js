import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import FastImage from 'react-native-fast-image'
import { ScaledSheet } from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';

const PastEventsScreen = ({ navigation }) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const snapshot = await firestore().collection("PastEvents").orderBy("id", "asc").get();
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
        return <ActivityIndicator
            size={35}
            color={COLORS.BLACK}
            shouldRasterizeIOS={true}
            style={styles.activityIndicator}
        />
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('NoBottomTab', { screen: 'EventsDetail', params: item })}>
                <View style={styles.eventContainer}>
                    <FastImage
                        style={styles.carousel}
                        source={require('../assets/lottieImages/dogCollars.png')}
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
        height: '160@vs',
        marginVertical: '10@ms',
        marginHorizontal: '20@ms',
        flexDirection: 'row',
        elevation: 23,
        shadowOffset: {
            width: 0,
            height: '11@vs',
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        borderColor: 'transparent',
        backgroundColor: '#fff',
        shadowColor: COLORS.BLACK,
        borderRadius: '10@ms'
    },
    carousel: {
        width: '41%',
        height: 'auto',
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
        fontSize: '15@ms',
        marginTop: '8@ms',
        color: COLORS.WHITE,
        textAlign: 'left',
        fontFamily: FONTS.BOLD
    },
    description: {
        fontSize: '13@ms',
        marginTop: '10@ms',
        color: COLORS.WHITE,
        textAlign: 'left',
        lineHeight: '20@ms',
        fontFamily: FONTS.MEDIUM
    },
    activityIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default PastEventsScreen