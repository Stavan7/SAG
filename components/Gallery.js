import React, { Component } from "react";
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import GalleryImages from "./GalleryImages";
import GalleryVideos from "./GalleryVideos";
import { useNavigation } from '@react-navigation/native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

class Gallery extends Component {

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
        const { navigation } = this.props
        return (
            <SafeAreaView style={styles.background}>
                <View style={{
                    borderRadius: 50,
                    height: 45,
                    width: 45,
                    borderWidth: 1,
                    borderColor: 'black',
                    margin: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    opacity: 0.87
                }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../assets/backIcon.png')}
                            resizeMode="contain"
                            style={{ height: 25, width: 25 }}
                            tintColor="white"
                        />
                    </TouchableOpacity>
                </View>

                <SegmentedControlTab
                    borderRadius={10}
                    tabStyle={styles.tabStyle}
                    values={["Images", "Videos"]}
                    onTabPress={this.handleIndexChange}
                    tabTextStyle={styles.tabTextStyle}
                    activeTabStyle={styles.activeTabStyle}
                    selectedIndex={this.state.selectedIndex}
                    activeTabTextStyle={styles.activeTabTextStyle}
                    tabsContainerStyle={styles.tabsContainerStyle}
                />
                {
                    this.state.selectedIndex === 0 ?
                        (<GalleryImages navigation={this.props.navigation} />)
                        : <GalleryVideos navigation={this.props.navigation} />
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
        fontSize: 17,
        fontFamily: 'PTSerif-Bold'
    },
})

export default Gallery;