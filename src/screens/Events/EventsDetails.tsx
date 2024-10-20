import React from 'react';
import {
    Text,
    View,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    useWindowDimensions
} from 'react-native'
import { shadow } from '@utils/index';
import { COLORS, FONTS } from '@constants/index'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface EventDetailsProps {
    route: {
        params: {
            title: string;
            date: string;
            image: string;
            description: string;
        };
    };
}

const EventsDetails: React.FC<EventDetailsProps> = ({ route }) => {

    const { width } = useWindowDimensions();
    const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const systemFonts = [...defaultSystemFonts, FONTS.BOLD, FONTS.MEDIUM];

    return (
        <SafeAreaView style={styles.view}>
            <View style={[styles.container, shadow]}>
                <Pressable hitSlop={20} style={styles.iconsContainer} onPress={() => nav.goBack()}>
                    <FontAwesome size={25} name="close" color="black" />
                </Pressable>
                <Text style={styles.header}>{route.params.title}</Text>
                <Text style={styles.date}>{route.params.date}</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: route.params.image }} />
                </View>
            </View>

            <View style={styles.card}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <RenderHtml
                        source={{ html: route.params.description }}
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

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#EDF2EE'
    },
    container: {
        zIndex: 1,
        paddingBottom: 10,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#EDF2EE',
        paddingTop: 20,
        paddingHorizontal: 10
    },
    iconsContainer: {
        right: 10,
        top: 20,
        width: 40,
        height: 40,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: COLORS.GREEN
    },
    imageContainer: {
        height: 210,
        overflow: 'hidden',
        marginTop: 20,
        marginHorizontal: 10,
    },
    image: {
        flex: 1,
        width: '100%',
        borderRadius: 25,
        resizeMode: 'contain'
    },
    header: {
        marginTop: 10,
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
    },
    date: {
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 5,
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
    },
    card: {
        padding: 20,
        marginTop: -20,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: COLORS.GREEN
    },
    description: {
        textAlign: "left",
        fontSize: 16,
        color: '#000',
        fontFamily: FONTS.REGULAR
    }
})

export default EventsDetails
