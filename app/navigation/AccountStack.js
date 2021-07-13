import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../screens/Account/Account";
import Logueo from "../screens/Account/Login";
import Password from "../screens/Account/Password";
import Logged from "../screens/Account/UserLogged";

const Stack = createStackNavigator();
export default function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={Logueo}

                options={{ title: "Inicio de Cuenta" }, { headerShown: false }}
            />
            <Stack.Screen
                name="usersession"
                component={Logged}

                options={{ title: "Bienvenido" }, { headerShown: false }}
            />
            <Stack.Screen
                name="password"
                component={Password}

                options={{ title: "Cambiar Contraseña" }, { headerShown: false }}
            />
            <Stack.Screen
                name="account"
                component={Account}

                options={{ title: "Registrar" }, { headerShown: false }}
            />
        </Stack.Navigator>
    )
}