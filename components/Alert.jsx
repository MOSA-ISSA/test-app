import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Alert = ({ visible, setVisible, message, cancel, confirm, ok }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(!visible)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{message}</Text>
                    <View style={styles.buttonRow}>
                        {
                            ok && <TouchableOpacity
                                style={[styles.button, styles.buttonOk]}
                                onPress={() => {
                                    setVisible(!visible);
                                    if (ok) ok?.();
                                }}
                            >
                                <Text style={styles.textStyle}>ok</Text>
                            </TouchableOpacity>

                        }
                        {
                            cancel && <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setVisible(!visible);
                                    if (cancel) cancel?.();
                                }}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>
                        }
                        {
                            confirm && <TouchableOpacity
                                style={[styles.button, styles.buttonConfirm]}
                                onPress={() => {
                                    if (confirm) confirm?.();
                                }}
                            >
                                <Text style={styles.textStyle}>Confirm</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Alert

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    modalText: {
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 25,
        elevation: 2,
        marginHorizontal: 10,
    },
    buttonConfirm: {
        backgroundColor: '#4CAF50',
    },
    buttonClose: {
        backgroundColor: '#F44336',
    },
    textStyle: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 16,
    },
    buttonOk: {
        backgroundColor: '#2196F3',
    },
});