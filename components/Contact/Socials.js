import React from 'react'
import {
    Text,
    View,
    Linking
} from 'react-native';
import FONTS from '../../constants/fonts';
import COLORS from '../../constants/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

const data = [
    {
        name: 'whatsapp',
        link: 'https://www.facebook.com/social_army_group-103076275246248/'
    },
    {
        name: 'instagram',
        link: 'https://instagram.com/social_army_group?igshid=YmMyMTA2M2Y='
    }, {
        name: 'facebook',
        link: 'https://www.facebook.com/social_army_group-103076275246248/'
    }
]
const Socials = () => {
    return (
        <>
            <Text style={styles.linkHeader}>Social Media Links</Text>
            <View style={styles.socialMediaContainer}>
                {
                    data.map((item, index) => (
                        <FontAwesome
                            key={index}
                            size={23}
                            color="#086f23"
                            name={item.name}
                            onPress={() => Linking.openURL(item.link)}
                        />
                    ))
                }
            </View>
        </>
    )
}

export default Socials

const styles = ScaledSheet.create({
    linkHeader: {
        fontSize: '18@ms',
        marginLeft: '20@ms',
        color: COLORS.BLACK,
        marginBottom: '10@ms',
        fontFamily: FONTS.BOLD
    },
    socialMediaContainer: {
        width: '50%',
        height: '41@ms',
        alignSelf: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'space-around',
        borderRadius: moderateScale(10),
        marginBottom: moderateScale(20),
        marginHorizontal: moderateScale(20),
    },
})