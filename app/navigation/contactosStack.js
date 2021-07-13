import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Contactos from "../screens/encuesta/Contactos";
import Encuestado from "../screens/encuesta/Encuestado";
import Formato1 from "../screens/encuesta/Formato1";
import Formato2 from "../screens/encuesta/Formato2";
import Formato3 from "../screens/encuesta/Formato3";
import Formato4 from "../screens/encuesta/Formato4";
import Formato5 from "../screens/encuesta/Formato5";
import Child from "../screens/encuesta/registerChild";
import Pregnant from "../screens/encuesta/registerPregnant";
import Llamada from "../screens/encuesta/Llamada";
const Stack = createStackNavigator();
export default function contactosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Contactos"
                component={Contactos}
                options={{ title: "Contactos" }}
            />
                        <Stack.Screen
                name="persona"
                component={Encuestado}
            />
            <Stack.Screen
                name="child"
                component={Child}
                options={{ title: "Completar Datos" }}
            />
            <Stack.Screen
                name="pregnant"
                component={Pregnant}
                options={{ title: "Completar Datos" }}
            />
            <Stack.Screen
                name="formato1"
                component={Formato1}
                options={{ title: "Encuesta" }}
            />
            <Stack.Screen
                name="formato2"
                component={Formato2}
                options={{ title: "Encuesta" }}
            />
            <Stack.Screen
                name="formato3"
                component={Formato3}
                options={{ title: "Encuesta" }}
            />
            <Stack.Screen
                name="formato4"
                component={Formato4}
                options={{ title: "Encuesta" }}
            />
            <Stack.Screen
                name="formato5"
                component={Formato5}
                options={{ title: "Encuesta" }}
            />
            <Stack.Screen
                name="llamada"
                component={Llamada}
                options={{ title: "Llamada" }}
            />
        </Stack.Navigator>
    )
}