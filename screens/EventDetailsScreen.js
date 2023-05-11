import React from 'react'
import {
    Text,
    View,
    ScrollView,
    SafeAreaView,
    useWindowDimensions,
    TouchableOpacity
} from 'react-native';
import {
    ScaledSheet,
    moderateScale
} from 'react-native-size-matters';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import FastImage from 'react-native-fast-image';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
const EventDetailsScreen = ({ route, navigation }) => {
    const data = route.params
    const { width } = useWindowDimensions();
    const desc = data.description
    const source = {
        html: desc
    };
    const systemFonts = [...defaultSystemFonts, FONTS.BOLD, FONTS.MEDIUM];
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
                <FastImage style={styles.image} source={require('../assets/eventDetails/blankets1.jpeg')} />



            </View>
            <View style={styles.card}>
                <ScrollView>
                    <RenderHtml
                        source={source}
                        contentWidth={width}
                        systemFonts={systemFonts}
                        tagsStyles={{
                            li: { fontFamily: FONTS.MEDIUM, marginBottom: 10 },
                            body: { fontFamily: FONTS.MEDIUM, color: COLORS.WHITE, fontSize: 16 },
                            span: { fontFamily: FONTS.MEDIUM }
                        }}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

const styles = ScaledSheet.create({
    view: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    container: {
        padding: '10@ms',
        borderRadius: '10@ms',
        shadowRadius: 15.19,
        borderColor: COLORS.BLACK,
        marginHorizontal: '10@ms',
        marginTop: 10
    },
    iconsContainer: {
        top: '-14@ms',
        width: '40@ms',
        height: '40@ms',
        right: '-14@ms',
        borderWidth: '2@ms',
        borderRadius: '50@ms',
        borderColor: COLORS.BLACK,
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
        backgroundColor: COLORS.WHITE,
        shadowColor: COLORS.BLACK,
    },
    header: {
        marginTop: '10@ms',
        fontSize: '20@ms',
        textAlign: 'center',
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
    },
    date: {
        color: COLORS.BLACK,
        marginTop: '5@ms',
        fontSize: '17@ms',
        textAlign: 'center',
        fontFamily: FONTS.BOLD,
    },
    image: {
        height: '250@ms',
        width: '100%',
        marginTop: '10@ms',
        borderRadius: '10@ms',
    },
    card: {
        flex: 1,
        marginTop: '20@ms',
        borderTopRightRadius: '20@ms',
        borderTopLeftRadius: '20@ms',
        paddingHorizontal: '20@ms',
        paddingTop: '10@ms',
        backgroundColor: COLORS.BLACK
    },
    description: {
        fontSize: '16@ms',
        color: COLORS.WHITE,
        textAlign: "left",
        fontFamily: FONTS.REGULAR
    },
})

export default EventDetailsScreen