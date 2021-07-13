import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Sincronizar from "../screens/Sincronizar";

const Stack = createStackNavigator();
export default function SincronizarStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Sincronizar"
                component={Sincronizar}
                options={{ title: "Sincronizar" }}
            />
        </Stack.Navigator>
    )
}