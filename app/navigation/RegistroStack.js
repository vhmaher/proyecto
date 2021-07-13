import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Registro from "../screens/Registro/Registro";
import Encuestado from "../screens/Registro/Registro";

const Stack = createStackNavigator();
export default function RegistroStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="registro"
                component={Registro}
                options={{ title: "Registro" }}
            />

        </Stack.Navigator>
    )
}