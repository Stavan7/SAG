import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
import {
    ScaledSheet,
    moderateScale
} from 'react-native-size-matters';
import FONTS from '../../constants/fonts';
import COLORS from '../../constants/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';

const EventsDetails = ({ route, navigation }) => {
    const data = route.params;

    const { width } = useWindowDimensions();
    const systemFonts = [...defaultSystemFonts, FONTS.BOLD, FONTS.MEDIUM];

    return (
        <SafeAreaView style={styles.view}>
            <View style={styles.container} >
                <TouchableOpacity
                    hitSlop={20}
                    activeOpacity={0.5}
                    style={styles.iconsContainer}
                    onPress={() => navigation.goBack()} >
                    <FontAwesome
                        name="close"
                        color='black'
                        size={moderateScale(25)}
                    />
                </TouchableOpacity>

                <Text style={styles.header}>{data.title}</Text>
                <Text style={styles.date}>{data.date}</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: data.image }} />
                </View>
            </View>

            <View style={styles.card}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <RenderHtml
                        source={{ html: data.description }}
                        contentWidth={width}
                        systemFonts={systemFonts}
                        tagsStyles={{
                            span: { fontFamily: FONTS.MEDIUM },
                            li: { fontFamily: FONTS.MEDIUM, marginBottom: 10 },
                            body: { fontFamily: FONTS.MEDIUM, color: COLORS.BLACK, fontSize: 16 },
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
        backgroundColor: '#EDF2EE'
    },
    container: {
        paddingBottom: '10@ms',
        zIndex: 1,
        elevation: 5,
        borderBottomLeftRadius: '25@ms',
        borderBottomRightRadius: '25@ms',
        backgroundColor: '#EDF2EE',
        shadowOffset: {
            width: 0,
            height: '5@vs',
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        paddingTop: '20@ms'
        , paddingHorizontal: '10@ms'
    },
    iconsContainer: {
        right: '10@ms',
        top: '20@ms',
        width: '40@ms',
        height: '40@ms',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50@ms',
        backgroundColor: COLORS.GREEN,
    },
    imageContainer: {
        height: '210@ms',
        overflow: 'hidden',
        marginTop: '20@ms',
        marginHorizontal: "10@ms",
    },
    image: {
        flex: 1,
        width: '100%',
        borderRadius: '25@ms',
        resizeMode: 'contain'
    },
    header: {
        marginTop: '10@ms',
        fontSize: '20@ms',
        textAlign: 'left',
        marginLeft: 10,
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
    },
    date: {
        fontSize: '17@ms',
        textAlign: 'left',
        marginLeft: 10,
        marginTop: '5@ms',
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
    },
    card: {
        padding: 20,
        marginTop: '-20@ms',
        borderBottomLeftRadius: '25@vs',
        borderBottomRightRadius: '25@vs',
        backgroundColor: COLORS.GREEN
    },
    description: {
        textAlign: "left",
        fontSize: '16@ms',
        color: '#000',
        fontFamily: FONTS.REGULAR
    },
})

export default EventsDetails