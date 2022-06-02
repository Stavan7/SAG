import React from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import data from '../data/data';
import Header from "../components/header";
import LinearGradient from 'react-native-linear-gradient';


const events = data.PastEvents;

const GalleryList = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header heading="Gallery" />
            <ScrollView showsVerticalScrollIndicator={false}>

                {
                    events.map(event => {
                        return (
                            <TouchableOpacity
                                key={event.id}
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('NoBottomTab', {
                                    screen: 'Gallery',
                                    params: events
                                })}>
                                <View style={styles.eventContainer}>
                                    <Image
                                        source={event.image}
                                        style={styles.carousel}
                                        key={event.id}
                                    />
                                    <LinearGradient colors={['#000', '#000']} style={styles.textContainer}>
                                        <Text style={styles.title}>{event.title}</Text>
                                        <Text style={styles.date}>{event.date}</Text>
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>

                        )
                    })
                }
            </ScrollView>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 80,
        backgroundColor: 'white'
    },
    eventContainer: {
        height: 140,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
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
    carousel: {
        width: '40%',
        height: 'auto',
        resizeMode: 'cover',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16
    },
    textContainer: {
        flex: 1,
        opacity: 0.87,
        justifyContent: 'center',
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16
    },
    title: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold'
    },
    date: {
        fontSize: 16,
        marginTop: 5,
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold'
    },
    description: {
        fontSize: 16,
        marginTop: 25,
        color: 'white',
        marginBottom: 5,
        fontFamily: 'PTSerif-Regular'
    }
})

export default GalleryList