import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ScrollView,
    SafeAreaView
} from 'react-native';
import contacts from '../data/contacts';
import Header from "../components/header";
import { ListItem, Avatar } from 'react-native-elements'

const CommunityScreen = () => {
    const getUserItem = ({ item: contacts }) => {
        return (
            <View styles={{ flex: 1 }}>
                <ListItem key={contacts.id} bottomDivider >
                    <Avatar rounded size='small' source={{ uri: contacts.avatarUrl }} />
                    <ListItem.Content>
                        <ListItem.Title style={styles.listName}>{contacts.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.background}>
            <Header heading="Community" />
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

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    scroll: {
        height: 100,
        borderWidth: 1,
        borderColor: 'black'
    },
    headerText: {
        fontSize: 23,
        color: '#086f23',
        fontFamily: 'PTSerif-Bold',
    },
    viewContact: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 10,
        padding: 0,
    },
    listName: {
        fontSize: 17,
        color: '#000',
        fontFamily: 'PTSerif-Regular',
    }
})

export default CommunityScreen;