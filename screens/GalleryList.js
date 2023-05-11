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
import Header from "../components/header";
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
                key={item.id}
                activeOpacity={0.8}
                onPress={() => showAlert()}>
                <View style={styles.eventContainer}>
                    <FastImage
                        style={styles.carousel}
                        resizeMethod="scale"
                        source={require('../assets/lottieImages/dogCollars.png')}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
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
        height: '120@vs',
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
        backgroundColor: COLORS.BLACK,
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
    },
    activityIndicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default GalleryList