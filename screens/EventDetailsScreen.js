import React from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
import {
    ScaledSheet,
    moderateScale
} from 'react-native-size-matters';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';

const HEIGHT = Dimensions.get('screen').height;
const EventDetailsScreen = ({ route, navigation }) => {

    const data = route.params
    const { width } = useWindowDimensions();
    const systemFonts = [...defaultSystemFonts, FONTS.BOLD, FONTS.MEDIUM];

    return (
        <SafeAreaView style={styles.view}>
            <View style={styles.container} >
                <View style={styles.iconsContainer}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                        <FontAwesome
                            name="close"
                            color='white'
                            size={moderateScale(25)}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.header}>{data.title}</Text>
                <Text style={styles.date}>{data.date}</Text>
            </View>
            <Image
                resizeMode="cover"
                style={styles.image}
                source={{ uri: data.image }}
            />
            <View style={styles.card}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <RenderHtml
                        source={{ html: data.description }}
                        contentWidth={width}
                        systemFonts={systemFonts}
                        tagsStyles={{
                            span: { fontFamily: FONTS.MEDIUM },
                            li: { fontFamily: FONTS.MEDIUM, marginBottom: 10 },
                            body: { fontFamily: FONTS.MEDIUM, color: COLORS.WHITE, fontSize: 16 },
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
        paddingBottom: '10@ms',
        marginTop: '20@ms',
        marginHorizontal: '10@ms',
    },
    iconsContainer: {
        right: '-8@ms',
        top: '-14@ms',
        width: '40@ms',
        height: '40@ms',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50@ms',
        backgroundColor: COLORS.BLACK,
    },
    header: {
        marginTop: '10@ms',
        fontSize: '20@ms',
        textAlign: 'center',
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
    },
    date: {
        fontSize: '17@ms',
        textAlign: 'center',
        marginTop: '5@ms',
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
    },
    image: {
        width: '90%',
        alignSelf: 'center',
        height: HEIGHT / 3.9,
        borderRadius: '10@ms',
    },
    card: {
        flex: 1,
        padding: 20,
        marginTop: '10@ms',
        borderTopRightRadius: '20@ms',
        borderTopLeftRadius: '20@ms',
        backgroundColor: COLORS.BLACK
    },
    description: {
        textAlign: "left",
        fontSize: '16@ms',
        color: COLORS.WHITE,
        fontFamily: FONTS.REGULAR
    },
})

export default EventDetailsScreen