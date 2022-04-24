import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import ContactUs from "./ContactUs";
import About from "../components/About";
import Header from "../components/header";
import SegmentedControlTab from 'react-native-segmented-control-tab';


class AboutUsScreen extends Component {
    constructor() {
        super();
        this.state = {
            selectedIndex: 0
        };
    }

    handleIndexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index
        });
    };

    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header heading="About Us" />
                <SegmentedControlTab
                    borderRadius={10}
                    tabStyle={styles.tabStyle}
                    values={["About Us", "Contact Us"]}
                    onTabPress={this.handleIndexChange}
                    tabTextStyle={styles.tabTextStyle}
                    activeTabStyle={styles.activeTabStyle}
                    selectedIndex={this.state.selectedIndex}
                    activeTabTextStyle={styles.activeTabTextStyle}
                    tabsContainerStyle={styles.tabsContainerStyle}
                />
                {this.state.selectedIndex === 0 ? (<About />) : <ContactUs />}
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFF', 
    },
    tabStyle: {
        width: 'auto',
        elevation: 23,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        borderColor: 'transparent',
        backgroundColor: '#D9DDDB',
    },
    tabsContainerStyle: {
        height: 43,
        width: '80%',
        alignSelf: 'center',
    },
    activeTabStyle: {
        elevation: 23,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    activeTabTextStyle: {
        color: 'black',
        fontFamily: 'PTSerif-Regular'
    },
    tabTextStyle: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'PTSerif-Regular'
    },
})


export default AboutUsScreen;