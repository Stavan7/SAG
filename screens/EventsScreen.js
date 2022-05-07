import React, { Component } from "react";
import {
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Header from "../components/header";
import PastEvents from "./PastEvents";
import UpComingEvents from "./UpComingEvents";
import SegmentedControlTab from 'react-native-segmented-control-tab';

class EventsScreen extends Component {
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

    render(navigation) {
        return (
            <SafeAreaView style={styles.background}>
                <Header heading="Events" />
                <SegmentedControlTab
                    borderRadius={10}
                    tabStyle={styles.tabStyle}
                    values={["Upcoming Events", "Past Events"]}
                    onTabPress={this.handleIndexChange}
                    tabTextStyle={styles.tabTextStyle}
                    activeTabStyle={styles.activeTabStyle}
                    selectedIndex={this.state.selectedIndex}
                    activeTabTextStyle={styles.activeTabTextStyle}
                    tabsContainerStyle={styles.tabsContainerStyle}
                />
                {
                    this.state.selectedIndex === 0 ?
                        (<UpComingEvents navigation={navigation} />)
                        : <PastEvents navigation={navigation} />
                }

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
        fontFamily: 'PTSerif-Bold'
    },
    tabTextStyle: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'PTSerif-Bold'
    },
})

export default EventsScreen;