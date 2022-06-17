import React from "react";
import {
    View,
    Text,
    FlatList,
    ScrollView,
    SafeAreaView
} from 'react-native';
import contacts from '../data/contacts';
import Header from "../components/header";
import { ListItem, Avatar } from 'react-native-elements';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import Founders from "../components/Founders";

const CommunityScreen = () => {
    const getUserItem = ({ item: contacts }) => {
        return (
            <View styles={{ flex: 1 }}>
                <ListItem
                    key={contacts.name}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: moderateScale(10),
                        marginBottom: moderateScale(10)
                    }}
                >
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
            <Founders />

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
        marginBottom: '70@ms',
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: '20@ms',
        color: '#086f23',
        marginBottom: '10@ms',
        marginLeft: '10@ms',
        fontFamily: 'PTSerif-Bold',
    },
    viewContact: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: '10@ms',
        margin: '10@ms',
    },
    listTitle: {
        fontSize: '16@ms',
        color: '#000',
        fontFamily: 'PTSerif-Bold',
    },
    listSubtitle: {
        fontSize: '14@ms',
        color: '#000',
        marginTop: '10@ms',
        fontFamily: 'PTSerif-Regular',
    }
})

export default CommunityScreen;