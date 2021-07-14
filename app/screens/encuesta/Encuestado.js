import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Encuestado(props) {

    const { navigation, route } = props;
    const { id, nombre, categoria, celular } = route.params;
    const [isLoading, setIsLoading] = useState(false);


    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }

    const Formatos = () => {

        if (categoria === "gestante" || categoria === "GESTANTE") {
            navigation.navigate("formato4", {
                Eid: id,
                Enombre: nombre
            });
        }
        else {
            navigation.navigate("formato1", {
                Eid: id,
                Enombre: nombre
            });
        }
        //navigation.navigate("formato1");
    }
    const Completar = () => {

        if (categoria === "gestante" || categoria === "GESTANTE") {
            navigation.navigate("pregnant", {
                Eid: id,
                Enombre: nombre
            });
        }
        else {
            navigation.navigate("child", {
                Eid: id,
                Enombre: nombre
            });
        }
        //navigation.navigate("formato1");
    }
    const Llamada = () => {
        navigation.navigate("llamada", {
            Eid: id,
            Enombre: nombre,
            Ecelular: celular
        });
    }
    navigation.setOptions({ title: nombre })
    return (
        <View style={styles.container}>
            <View >
                <TouchableOpacity
                    onPress={() => Completar()}
                    style={styles.button}>
                    <View style={styles.metaInfo}>
                        <Image
                            source={require("../../../assests/user.png")}
                            resizeMode="contain"
                            style={styles.image}
                        />
                        <Text style={styles.title}>Completar Datos de {categoria}</Text>

                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => Formatos()}
                style={styles.button}>
                <View style={styles.metaInfo}>
                    <Image
                        source={require("../../../assests/encuesta.png")}
                        resizeMode="contain"
                        style={styles.image}
                    />
                    <Text style={styles.title}>Encuesta Visita </Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Llamada()}
                style={styles.button}>
                <View style={styles.metaInfo}>
                    <Image
                        source={require("../../../assests/telefono.png")}
                        resizeMode="contain"
                        style={styles.image}
                    />
                    <Text style={styles.title}>Primera llamada </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Llamada()}
                style={styles.button}>
                <View style={styles.metaInfo}>
                    <Image
                        source={require("../../../assests/telefono.png")}
                        resizeMode="contain"
                        style={styles.image}
                    />
                    <Text style={styles.title}>Segunda llamada </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    image: {
        alignItems: 'center',
        height: 60,
        width: "20%",
        marginBottom: 5,

    },
    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
    },
    listItem: {
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    Listas: {
        backgroundColor: '#DC7B08',
        marginHorizontal: 10,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20
    },
    metaInfo: {
        marginLeft: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {

        flexDirection: 'row'
    },
    title: {
        fontSize: 25,
        width: 300,
        padding: 5,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#F5ECE2',
        borderWidth: 1,
        borderColor: '#7688',
        padding: 10,
        width: 300,
        marginTop: 16,
        borderRadius:20
    },
    btnText: {
        color: "white",
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
    },
});