import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const FormPage = () => {
    return (
        <View style={styles.page}>
            <TextInput
                placeholder='Nome Completo'
                editable
                maxLength={70}
                style={styles.input} />

            <TextInput
                placeholder='CPF'
                editable
                maxLength={14}
                style={styles.input} />

            <TextInput
                placeholder='Data de Nascimento'
                editable
                maxLength={10}
                style={styles.input} />

            <TextInput
                placeholder='Email'
                editable
                maxLength={200}
                style={styles.input} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: 250,
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        margin: 15
    },
    button: {
        width: 120,
        height: 50,
        backgroundColor: '#6CA2F7',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    }
});

export default FormPage;