import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

class PastEvents extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>PastEvents</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 80,
    },
    text: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'PTSerif-Regular'
    }
})

export default PastEvents