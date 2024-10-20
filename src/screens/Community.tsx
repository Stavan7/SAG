import React from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import data from "@data/data";
import { shadow } from "@utils/index";
import FastImage from 'react-native-fast-image';
import { COLORS, FONTS } from '@constants/index';

const founders = data.Founders

const Community = (): React.JSX.Element => {
    return (
        <SafeAreaView style={styles.background}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.headerText}>Meet Our Founders</Text>
                {founders.map((item, index) => {
                    let oddIndex = index % 2 === 0
                    return (
                        <View key={item.name}
                            style={[styles.container, {
                                flexDirection: oddIndex ? 'row' : 'row-reverse'
                            }]}>
                            <FastImage
                                source={item.avatarUrl}
                                style={styles.image}
                                resizeMode='cover'
                            />
                            <View style={[styles.nameContainer, shadow, {
                                borderBottomRightRadius: oddIndex ? 10 : 0,
                                borderTopRightRadius: oddIndex ? 10 : 0,
                                borderTopLeftRadius: !oddIndex ? 10 : 0,
                                borderBottomLeftRadius: !oddIndex ? 10 : 0,
                            }]}>
                                <Text style={styles.name}>{item.position}</Text>
                                <Text style={[styles.name, { fontFamily: FONTS.MEDIUM, fontSize: 14, marginTop: 3 }]}>{item.name}</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    headerText: {
        fontSize: 18,
        marginLeft: 20,
        color: COLORS.GREEN,
        marginVertical: 10,
        fontFamily: FONTS.BOLD,
    },
    container: {
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent: 'flex-start',
        backgroundColor: COLORS.WHITE
    },
    image: {
        width: 140,
        height: 160,
        borderRadius: 10,
    },
    nameContainer: {
        height: 70,
        padding: 8,
        marginTop: 10,
        backgroundColor: COLORS.WHITE
    },
    name: {
        fontSize: 16,
        color: COLORS.BLACK,
        fontFamily: FONTS.SEMIBOLD
    }
})

export default Community
