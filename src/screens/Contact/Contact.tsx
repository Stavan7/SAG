import React, { useState } from "react"
import {
    StyleSheet,
    SafeAreaView
} from 'react-native'
import { FONTS, COLORS } from '@constants/index'
import { Payment, Socials } from '@screens/index'
import SegmentedControlTab from 'react-native-segmented-control-tab'

const Contact = (): React.JSX.Element => {

    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    const handleIndexChange = (index) => {
        setSelectedIndex(index)
    }

    return (
        <SafeAreaView style={styles.background}>
            <SegmentedControlTab
                selectedIndex={selectedIndex}
                onTabPress={handleIndexChange}
                values={["Payment Links", "Social Media"]}
                tabStyle={styles.tabStyle}
                tabTextStyle={styles.tabTextStyle}
                activeTabStyle={styles.tabStyle}
                activeTabTextStyle={styles.activeTabTextStyle}
                tabsContainerStyle={styles.tabsContainerStyle}
            />
            {selectedIndex === 0 ? <Payment /> : <Socials />}
        </SafeAreaView>
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
        fontFamily: FONTS.BOLD,
        borderBottomColor: COLORS.BLACK,
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

export default Contact 
