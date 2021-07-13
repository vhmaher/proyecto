import React from 'react';

import { StyleSheet, View, TextInput, Button, Text} from 'react-native';

export default function Update() {


    return (

        <View style={styles.MainContainer}>

            <Text style={styles.title}>Actualizar Datos</Text>

            <TextInput
                placeholder="Ingrese DNI"
                onChangeText={name => this.setState({ UserName: name })}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
            />

            <TextInput
                placeholder="Ingrese Usuario"
                onChangeText={email => this.setState({ UserEmail: email })}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
            />

            <TextInput
                placeholder="Ingrese Contraseña"
                onChangeText={password => this.setState({ UserPassword: password })}
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                secureTextEntry={true}
            />
            <Button title="Registrar Usuario" onPress={this.UserRegistrationFunction} color="#2196F3" />
        </View>

    );
}


const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 10
    },

    TextInputStyleClass: {

        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5,
    },

    title: {

        fontSize: 22,
        color: "#009688",
        textAlign: 'center',
        marginBottom: 15
    }

});