import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CreditCard from './CreditCard '

const Test = () => {
    return (
        <View style={styles.View}>
            <CreditCard />
        </View>
    )
}

export default Test

const styles = StyleSheet.create({
    View: {
        flex: 1,
    }
})