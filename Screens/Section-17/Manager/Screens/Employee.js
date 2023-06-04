import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, ActivityIndicator, StyleSheet, Modal, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native'
import messaging from '@react-native-firebase/messaging'

const FIREBASE_SERVER_KEY = 'BPOIV4YbLu4wtZYh682mxk77r7GIGFDXesbxk4hx8BeSYLrP8Zg01-J10LrpFmf6Vin8xcqq3sD0D3UAgJVlTvo'

const Employee = () => {
    const [employees, setEmployees] = useState([])
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [shiftDay, setShiftDay] = useState('')
    const [isModalVisible, setModalVisible] = useState(false)
    const [fireModalVisible, setFireModalVisible] = useState(false)
    const [selectedEmployee, setSelectedEmployee] = useState(null)
    const [Index, setIndex] = useState()
    const [token, setToken] = useState('')


    useEffect(() => {
        const setUpCloudMessaging = async () => {
            requestUserPermission()
            const token = await messaging().getToken()
            setToken(token)
            console.log('token is ' + token)
        }
        setUpCloudMessaging()
    }, [])

    async function requestUserPermission() {
        const authorizationStatus = await messaging().requestPermission()

        if (authorizationStatus) {
            console.log('Permission status:', authorizationStatus)
        }
    }

    async function sendMessage(token) {
        const message = {
            registration_ids: [token],
            notification: {
                title: 'Hello',
                body:
                    Platform.OS == 'ios'
                        ? 'Send a message from iOS'
                        : 'Send a message from Android',
                vibrate: 1,
                sound: 1,
                image:
                    'https://yt3.googleusercontent.com/ytc/AL5GRJVhQ4VfaYk7tLNMPDyNkgjTqWKnOXhA-NQZ1FFDUA=s176-c-k-c0x00ffffff-no-rj',
                priority: 'high',
                show_in_foreground: true,
                content_available: true,
            },
            data: {
                title: 'data_title',
                body: 'data_body',
                extra: 'data_extra',
            },
        };

        let headers = new Headers({
            'Content-Type': 'application/json',
            Authorization: 'key=' + FIREBASE_SERVER_KEY,
        });

        let response = await fetch('https://fcm.googleapis.com/fcm/send', {
            method: 'POST',
            headers,
            body: JSON.stringify(message),
        })
        response = await response.json()
        setToken('')
        console.log(response,'RES')
    }


    const handleAddEmployee = () => {
        const employee = {
            name,
            phoneNumber,
            shiftDay
        }
        setEmployees([...employees, employee])
        setName('')
        setPhoneNumber('')
        setShiftDay('')
        setModalVisible(false)
    }

    const handleRemoveEmployee = (index) => {
        const updatedEmployees = [...employees]
        updatedEmployees.splice(index, 1)
        setEmployees(updatedEmployees)
        setFireModalVisible(false)
    }

    /* const handleSendMessage = (phoneNumber) => {
 
         messaging()
             .sendMessage({
                 data: {
                     phoneNumber: phoneNumber
                 },
             })
             .then(() => {
                 console.log('Message sent successfully.')
             })
             .catch((error) => {
                 console.log('Error sending message:', error)
             })
     }*/

    return (
        <View style={styles.container}>
            <Modal
                visible={fireModalVisible}
                animationType="slide"
                onRequestClose={() => setFireModalVisible(false)}
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={styles.label}>{`Are you sure you want to fire ${selectedEmployee}`}</Text>
                        <View style={styles.smallButtonContainer}>
                            <TouchableOpacity onPress={() => setFireModalVisible(false)} activeOpacity={0.7} style={styles.smallButton}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleRemoveEmployee(Index)} activeOpacity={0.7} style={styles.smallButton}>
                                <Text style={styles.buttonText}>Fire</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={styles.label}>Employee Name:</Text>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            style={styles.input}
                            placeholder="Enter name"
                        />

                        <Text style={styles.label}>Phone Number:</Text>
                        <TextInput
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            style={styles.input}
                            placeholder="Enter phone number"
                        />

                        <Text style={styles.label}>Shift Day:</Text>
                        <TextInput
                            value={shiftDay}
                            onChangeText={setShiftDay}
                            style={styles.input}
                            placeholder="Enter shift day"
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={handleAddEmployee} activeOpacity={0.7} style={styles.button}>
                                <Text style={styles.buttonText}>Add Employee</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(false)} activeOpacity={0.7} style={styles.button}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>Add Employee</Text>
            </TouchableOpacity>
            <View style={styles.employeeList}>
                {employees.map((employee, index) => (
                    <View style={styles.employeeItem} key={index}>
                        <Text style={styles.employeeText}>Name: {employee.name}</Text>
                        <Text style={styles.employeeText}>Phone Number: {employee.phoneNumber}</Text>
                        <Text style={styles.employeeText}>Shift Day: {employee.shiftDay}</Text>
                        <View style={styles.smallButtonContainer}>
                            <TouchableOpacity onPress={() => {
                                setSelectedEmployee(employee.name)
                                setIndex(index)
                                setFireModalVisible(true)
                            }} activeOpacity={0.7} style={styles.smallButton}>
                                <Text style={styles.buttonText}>Fire</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => sendMessage(token)} activeOpacity={0.7} style={styles.smallButton}>
                                <Text style={styles.buttonText}>Message</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    modal: {
        padding: '5%',
        backgroundColor: 'white',
        borderRadius: 5
    },
    label: {
        marginBottom: 5,
        marginLeft: '5%',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        width: '95%',
        backgroundColor: '#F5F5F5',
        height: 60,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: '2%',
        paddingLeft: '5%',
        paddingRight: '5%',
        color: 'black',
        fontSize: 16,
    },
    employeeList: {
        marginTop: 20,
    },
    employeeItem: {
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: '2%',
        padding: '5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    employeeText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height: 65,
        alignSelf: 'center',
        marginTop: '10%'
    },
    smallButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 45,
        alignSelf: 'center',
        marginTop: '5%'
    },
    button: {
        height: 50,
        width: '45%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 5
    },
    smallButton: {
        height: 40,
        width: '45%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    },
})

export default Employee
