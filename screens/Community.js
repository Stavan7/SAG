import React from "react";
import {
    View,
    Text,
    FlatList,
    Dimensions,
    SafeAreaView
} from 'react-native';
import contacts from '../data/contacts';
import Header from "../components/header";
import Founders from "../components/Founders";
import { ListItem, Avatar } from '@rneui/themed';
import { moderateScale, ScaledSheet, verticalScale } from 'react-native-size-matters';

const HEIGHT = Dimensions.get('window').height

const CommunityScreen = () => {
    const getUserItem = ({ item: contacts }) => {
        return (
            <View styles={{ flex: 1 }}>
                <ListItem key={contacts.name} containerStyle={styles.listContainer}  >
                    <Avatar rounded size='large' source={{ uri: contacts.avatarUrl }} />
                    <ListItem.Content>
                        <ListItem.Title style={styles.listTitle}>{contacts.name}</ListItem.Title>
                        <ListItem.Subtitle style={styles.listSubtitle}>{contacts.email}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.background}>
            <Header heading="Community" />
            <View style={styles.founders}>
                <Founders />
            </View>

            <View style={styles.viewContact}>
                <Text style={styles.headerText}>Meet Our Team</Text>
                <FlatList
                    data={contacts}
                    renderItem={getUserItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={contacts => contacts.id.toString()}
                />
            </View >
        </SafeAreaView >
    )
}

const styles = ScaledSheet.create({
    background: {
        flex: 1,
        marginBottom: '59@ms',
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: '20@ms',
        color: '#086f23',
        marginBottom: '16@ms',
        marginLeft: '10@ms',
        fontFamily: 'PTSerif-Bold',
    },
    founders: { height: HEIGHT / 2.7 },
    listContainer: {
        borderWidth: 1,
        borderColor: 'black',
        height: verticalScale(80),
        borderRadius: moderateScale(10),
        marginBottom: moderateScale(10)
    },
    viewContact: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: '10@ms',
        marginHorizontal: '10@ms',
    },
    listTitle: {
        fontSize: '16@ms',
        color: '#000',
        fontFamily: 'PTSerif-Bold',
    },
    listSubtitle: {
        fontSize: '14@ms',
        color: '#000',
        marginTop: '5@ms',
        fontFamily: 'PTSerif-Regular',
    }
})

export default CommunityScreen;