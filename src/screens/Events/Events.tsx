import React, { useState } from "react"
import {
    StyleSheet,
    SafeAreaView,
} from 'react-native'
import { COLORS, FONTS } from '@constants/index'
import { UpComingEvents, PastEvents } from "@screens/index"
import SegmentedControlTab from 'react-native-segmented-control-tab'

const Events = (): React.JSX.Element => {

    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const handleIndexChange = (index: number) => {
        setSelectedIndex(index)
    };

    return (
        <SafeAreaView style={styles.background}>
            <SegmentedControlTab
                values={["Upcoming Events", "Past Events"]}
                onTabPress={handleIndexChange}
                selectedIndex={selectedIndex}
                //styles
                tabStyle={styles.tabStyle}
                activeTabStyle={styles.tabStyle}
                tabTextStyle={styles.tabTextStyle}
                activeTabTextStyle={styles.activeTabTextStyle}
                tabsContainerStyle={styles.tabsContainerStyle}
            />
            {selectedIndex === 0 ? <UpComingEvents /> : <PastEvents />}
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
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
        fontSize: 16,
        color: COLORS.BLACK,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.BLACK,
        fontFamily: FONTS.BOLD
    },
    tabTextStyle: {
        fontSize: 16,
        color: 'grey',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        fontFamily: FONTS.BOLD
    }
})

export default Events;