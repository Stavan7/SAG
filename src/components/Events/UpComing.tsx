import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import { IMAGES, shadow } from '@utils/index';
import { FONTS, COLORS } from '@constants/index';

interface DataItem {
    _id: string;
    title: string;
    date: string;
    cardImage: string;
}

interface UpComingProps {
    data: DataItem[];
}

const UpComing: React.FC<UpComingProps> = ({ data }) => {
    return (
        <ImageBackground source={IMAGES.bgBlob} resizeMode='cover' style={{ flex: 1 }} >
            <View style={styles.container}>
                {
                    data.map((data) => {
                        return (
                            <View key={data._id} style={[styles.textContainer, shadow]}>
                                <View style={styles.textView}>
                                    <ImageBackground source={IMAGES.cardBg} resizeMode='contain'>
                                        <Image
                                            style={styles.image}
                                            source={{ uri: data.cardImage }}
                                        />
                                    </ImageBackground>

                                </View>
                                <Text style={styles.title}>{data.title}</Text>
                                <Text style={styles.date}>{data.date}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    textContainer: {
        height: 300,
        width: 320,
        marginTop: 50,
        alignSelf: 'center',
        borderRadius: 12,
        backgroundColor: COLORS.WHITE
    },
    textView: {
        margin: 16,
        borderRadius: 12,
        backgroundColor: COLORS.GREEN
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD
    },
    date: {
        fontSize: 14,
        marginVertical: 10,
        color: COLORS.BLACK,
        textAlign: 'center',
        fontFamily: FONTS.BOLD
    },
    image: {
        height: 200,
        width: '100%',
        marginVertical: -8,
        resizeMode: 'contain',
    }
})

export default UpComing
