import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
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
                            size={28}
                        />
                    </TouchableOpacity>

                </View>
                <Text style={styles.header}>{data.title}</Text>
                <Text style={styles.date}>{data.date}</Text>
                <Image style={styles.image} source={data.image} />

                <View style={styles.card}>
                    <Text style={styles.description}>{data.fullDescription}</Text>


                    <TouchableOpacity
                        style={styles.btn}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('Gallery')}>
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnText}>View Photos</Text>
                            <FontAwesome
                                name="arrow-right"
                                color='black'
                                size={25}
                            />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        margin: 20,
        padding: 10,
        borderRadius: 16,
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
        top: -14,
        width: 45,
        height: 45,
        right: -14,
        borderWidth: 2,
        borderRadius: 50,
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
        marginTop: 10,
        fontSize: 23,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold',
    },
    date: {
        fontSize: 18,
        color: '#000',
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold',
    },
    image: {
        zIndex: 1,
        marginTop: 10,
        height: '35%',
        width: '100%',
        marginBottom: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    card: {
        flex: 1,
        padding: 20,
        borderRadius: 20,
        opacity: 0.87,
        backgroundColor: '#000',
        overflow: 'visible'
    },
    description: {
        fontSize: 17,
        marginTop: 20,
        color: 'white',
        textAlign: "justify",
        fontFamily: 'PTSerif-Regular'
    },
    btn: {
        bottom: 10,
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        height: 50,
        width: '80%',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },
    btnText: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold',
    }
})

export default EventDetailsScreen