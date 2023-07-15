import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    Alert,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import Loader from '../components/Loader';
import Header from "../components/Header";
import FastImage from 'react-native-fast-image';
import { ScaledSheet } from 'react-native-size-matters';
import firestore from '@react-native-firebase/firestore';

const showAlert = () =>
    Alert.alert(
        "Sorry !",
        "Can't Access Images right now",
        [
            {
                text: "Cancel",
                style: "cancel",
            },
        ],
        { cancelable: true }
    );

const GalleryList = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const snapshot = await firestore().
                collection("PastEvents")
                .orderBy("id", "asc")
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

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => showAlert()}>
                <View style={styles.eventContainer}>
                    <FastImage
                        resizeMode='contain'
                        style={styles.image}
                        source={{ uri: item.cardImage }}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header heading="Gallery" />
            <FlatList
                data={data}
                initialNumToRender={10}
                renderItem={renderItem}
            />
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
        backgroundColor: COLORS.BLACK,
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
        justifyContent: 'center',
        borderTopRightRadius: '10@ms',
        borderBottomRightRadius: '10@ms',
    },
    title: {
        fontSize: '17@ms',
        color: COLORS.WHITE,
        textAlign: 'center',
        fontFamily: FONTS.BOLD,
    },
    date: {
        fontSize: '15@ms',
        marginTop: '10@ms',
        color: COLORS.WHITE,
        textAlign: 'center',
        fontFamily: FONTS.BOLD,
    }
})

export default GalleryList