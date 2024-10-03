import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CreditCardInput, CreditCardView, } from "react-native-credit-card-input";
import Alert from '../components/Alert';
import { useNavigation } from 'expo-router';

const CreditCard = () => {
    const [name, setName] = useState('')
    const [cvc, set_cvc] = useState('')
    const [number, setNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [type, setType] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    const handleConfirm = () => {
        navigation.reset({
            index: 0,
            routes: [{
                name: 'Home',
                params: {
                    message: 'Payment Successful',
                }
            }],
        })
    }

    return (
        <View style={styles.creditCard}>
            <CreditCardView
                name={name}
                cvc={cvc}
                number={number}
                expiry={expiry}
                type={type}
            />
            <CreditCardInput
                onChange={({ status, valid, values }) => {
                    const { cvc, number, expiry, type } = values;
                    set_cvc(cvc);
                    setNumber(number);
                    setExpiry(expiry);
                    setType(type);
                }}
            />
            <TextInput
                value={name}
                onChangeText={(e) => setName(e)}
                placeholder="Name"
                style={styles.input}
                placeholderTextColor={'grey'}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => setModalVisible(true)}//
            >
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
            {/*  */}
            <Alert
                visible={modalVisible}
                setVisible={setModalVisible}
                message="confirm payment"
                confirm={() => handleConfirm()}
                cancel={() => setModalVisible(false)}
            />
            {/*  */}
        </View>
    )
}

export default CreditCard

const styles = StyleSheet.create({
    creditCard: {
        flex: 1,
        alignContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
    },
    btn: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    }
})