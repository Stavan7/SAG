import React, { Component } from "react";
import FONTS from '../constants/fonts';
import COLORS from "../constants/colors";
import { SafeAreaView } from 'react-native';
import Qr from "../components/Contact/Qr";
import Header from "../components/Header";
import Email from '../components/Contact/Email'
import Socials from '../components/Contact/Socials'
import { ScaledSheet } from 'react-native-size-matters';
import Payment from '../components/Contact/Payment'
import SegmentedControlTab from 'react-native-segmented-control-tab';

class Contact extends Component {
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
                <Header heading="Contact Us" />
                <SegmentedControlTab
                    tabStyle={styles.tabStyle}
                    values={["Payment Links", "Social Media"]}
                    onTabPress={this.handleIndexChange}
                    tabTextStyle={styles.tabTextStyle}
                    activeTabStyle={styles.tabStyle}
                    selectedIndex={this.state.selectedIndex}
                    activeTabTextStyle={styles.activeTabTextStyle}
                    tabsContainerStyle={styles.tabsContainerStyle}
                />
                {
                    this.state.selectedIndex === 0 ?
                        <>
                            < Payment />
                            <Qr />
                        </>
                        :
                        <>
                            <Email />
                            <Socials />
                        </>
                }
            </SafeAreaView >
        )
    }
}

export default Contact;
