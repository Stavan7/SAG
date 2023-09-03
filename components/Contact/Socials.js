import React from 'react'
import {
    View,
    Linking
} from 'react-native';
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
        <View style={styles.socialMediaContainer}>
            {
                data.map((item, index) => (
                    <FontAwesome
                        key={index}
                        size={26}
                        color="#000"
                        name={item.name}
                        onPress={() => Linking.openURL(item.link)}
                    />
                ))
            }
        </View>
    )
}

export default Socials

const styles = ScaledSheet.create({
    socialMediaContainer: {
        width: '50%',
        height: '56@ms',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#94CBA0',
        justifyContent: 'space-around',
        borderRadius: moderateScale(12),
        marginTop: 20
    },
})