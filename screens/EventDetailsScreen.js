import React from 'react'
import {
    Text,
    View,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import {
    ScaledSheet,
    moderateScale
} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EventDetailsScreen = ({ route, navigation }) => {
    const data = route.params
    return (
        <SafeAreaView style={styles.view}>
            <View style={styles.container} >
                <View style={styles.iconsContainer}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                        <FontAwesome
                            name="close"
                            color='black'
                            size={moderateScale(25)}
                        />
                    </TouchableOpacity>

                </View>
                <Text style={styles.header}>{data.title}</Text>
                <Text style={styles.date}>{data.date}</Text>
                <FastImage style={styles.image} source={data.event} />

                <View style={styles.card}>
                    <ScrollView>
                        <Text style={styles.description}> {data.description}</Text>
                    </ScrollView>
                </View>

            </View>
        </SafeAreaView>

    )
}

const styles = ScaledSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        margin: '20@ms',
        padding: '10@ms',
        borderRadius: '10@ms',
        elevation: 16,
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        borderColor: 'black',
        backgroundColor: '#fff',
        shadowColor: '#000'
    },
    iconsContainer: {
        top: '-14@ms',
        width: '40@ms',
        height: '40@ms',
        right: '-14@ms',
        borderWidth: '2@ms',
        borderRadius: '50@ms',
        borderColor: 'black',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 23,
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        borderColor: 'transparent',
        backgroundColor: '#fff',
        shadowColor: 'black',
    },
    header: {
        marginTop: '10@ms',
        fontSize: '20@ms',
        color: '#000',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold',
    },
    date: {
        color: '#000',
        marginTop: '5@ms',
        fontSize: '17@ms',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold',
    },
    image: {
        height: '35%',
        width: '100%',
        marginTop: '10@ms',
        borderRadius: '10@ms',
    },
    card: {
        flex: 1,
        marginTop: '-20@ms',
        borderRadius: '10@ms',
        paddingVertical: '20@ms',
        paddingHorizontal: '10@ms',
        backgroundColor: '#000',
    },
    description: {
        fontSize: '16@ms',
        color: 'white',
        textAlign: "left",
        fontFamily: 'PTSerif-Regular'
    },
})

export default EventDetailsScreen