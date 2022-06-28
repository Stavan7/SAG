import React, { Component } from "react";
import PastEvents from "./PastEvents";
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import Header from "../components/header";
import { SafeAreaView } from 'react-native';
import UpComingEvents from "./UpComingEvents";
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

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
                    borderRadius={moderateScale(10)}
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

const styles = ScaledSheet.create({
    background: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    tabStyle: {
        width: 'auto',
        elevation: '23@vs',
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: '11@vs',
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        borderColor: 'transparent',
        backgroundColor: '#D9DDDB',
    },
    tabsContainerStyle: {
        height: '40@ms',
        width: '80%',
        alignSelf: 'center',
    },
    activeTabStyle: {
        elevation: '23@vs',
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: '11@ms',
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        backgroundColor: COLORS.WHITE,
    },
    activeTabTextStyle: {
        color: COLORS.BLACK,
        fontFamily: FONTS.SEMIBOLD
    },
    tabTextStyle: {
        color: COLORS.BLACK,
        fontSize: '14@ms',
        fontFamily: FONTS.SEMIBOLD
    },
})

export default EventsScreen;