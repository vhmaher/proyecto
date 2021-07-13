import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import contactosStack from "./app/navigation/contactosStack";
import SincronizarStack from "./app/navigation/SincronizarStack";
import AccountStack from "./app/navigation/AccountStack";
import RegistroStack from "./app/navigation/RegistroStack";


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="account"
                tabBarOptions={{
                    inactiveTintColor: "#646464",
                    activeTintColor: "#00a680"
                }}
            >
                <Tab.Screen
                    name="contactos"
                    component={contactosStack}
                    options={{ title: "Contactos" }}
                />
                <Tab.Screen
                    name="registro"
                    component={RegistroStack}
                    options={{ title: "Registro" }}
                />
                <Tab.Screen
                    name="sincronizar"
                    component={SincronizarStack}
                    options={{ title: "Sincronizar" }}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{ tabBarVisible: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}