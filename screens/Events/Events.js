import React, { Component } from "react";
import PastEvents from "./PastEvents";
import FONTS from '../../constants/fonts';
import { SafeAreaView } from 'react-native';
import COLORS from '../../constants/colors';
import Header from "../../components/Header";
import UpComingEvents from "./UpComingEvents";
import { ScaledSheet } from 'react-native-size-matters';
import SegmentedControlTab from 'react-native-segmented-control-tab';

class Events extends Component {
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

        const styles = ScaledSheet.create({
            background: {
                flex: 1,
                backgroundColor: COLORS.WHITE,
            },
            tabStyle: {
                borderColor: 'transparent',
                backgroundColor: 'transparent',
            },
            tabsContainerStyle: {
                height: 50,
                width: '80%',
                alignSelf: 'center',
            },
            activeTabTextStyle: {
                fontSize: '15@ms',
                color: COLORS.BLACK,
                borderBottomWidth: 2,
                borderBottomColor: '#000',
                fontFamily: FONTS.BOLD
            },
            tabTextStyle: {
                fontSize: '15@ms',
                color: 'grey',
                paddingBottom: 5,
                borderBottomWidth: 2,
                borderBottomColor: 'grey',
                fontFamily: FONTS.BOLD
            }
        })

        return (
            <SafeAreaView style={styles.background}>
                <Header heading="Events" />
                <SegmentedControlTab
                    tabStyle={styles.tabStyle}
                    values={["Upcoming Events", "Past Events"]}
                    onTabPress={this.handleIndexChange}
                    tabTextStyle={styles.tabTextStyle}
                    activeTabStyle={styles.tabStyle}
                    selectedIndex={this.state.selectedIndex}
                    activeTabTextStyle={styles.activeTabTextStyle}
                    tabsContainerStyle={styles.tabsContainerStyle}
                />
                {
                    this.state.selectedIndex === 0 ?
                        <UpComingEvents /> :
                        <PastEvents navigation={this.props.navigation} />
                }
            </SafeAreaView >
        )
    }
}

export default Events;