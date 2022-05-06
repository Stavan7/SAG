import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import data from '../data/data'
import COLORS from '../constants/colors';

const events = data.PastEvents;

class PastEvents extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        events.map(event => {
                            return (
                                <TouchableOpacity
                                    key={event.id}
                                    activeOpacity={0.8}
                                    onPress={() =>console.log("Event clicked")}>
                                    <View style={styles.eventContainer}>
                                        <Image
                                            source={event.image}
                                            style={styles.carousel}
                                            key={event.id}
                                        />
                                        <View style={styles.textContainer} >
                                            <Text style={styles.title}>{event.title}</Text>
                                            <Text style={styles.date}>{event.date}</Text>
                                            <Text style={styles.description}>{event.description}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 70,
    },
    eventContainer: {
        height: 200,
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
        shadowColor: COLORS.bottomTabBg,
    },
    carousel: {
        width: '40%',
        height: 'auto',
        borderRadius: 10,
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold'
    },
    date: {
        fontSize: 17,
        marginTop: 10,
        color: 'black',
        textAlign: 'center',
        fontFamily: 'PTSerif-Regular'
    },
    description: {
        fontSize: 16,
        marginTop: 20,
        color: 'black',
        marginBottom: 5,
        textAlign: 'justify',
        fontFamily: 'PTSerif-Regular'
    }
})

export default PastEvents