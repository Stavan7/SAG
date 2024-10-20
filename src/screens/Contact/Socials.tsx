import React from 'react'
import {
    View,
    Linking,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { shadow } from '@utils/index';
import { COLORS } from '@constants/index';
import { ContactCard } from '@components/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

const email = 'kulkarnistavan25@gmail.com'
const openUrl = () => Linking.openURL('mailto:kulkarnistavan25@gmail.com?subject=  Suggestions for SAG=body')

const Socials = (): React.JSX.Element => {
    return (
        <SafeAreaView>
            <ContactCard
                header='Gmail ID'
                textOne={email}
                textTwo={email}
                handleTextOnePress={openUrl}
                handleTextTwoPress={openUrl}
            />
            <View style={[styles.socialMediaContainer, shadow]}>
                {
                    data.map(item => (
                        <FontAwesome
                            size={26}
                            color="#000"
                            key={item.name}
                            name={item.name}
                            onPress={() => Linking.openURL(item.link)}
                        />
                    ))
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    socialMediaContainer: {
        width: '50%',
        height: 56,
        marginTop: 20,
        borderRadius: 12,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.GREEN,
        justifyContent: 'space-around',
    }
})

export default Socials
