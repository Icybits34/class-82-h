import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator"
import Profile from "../screens/Profile"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <DrawerNavigator>
            <Drawer.Screen name="Home" componet={'TabNavigator'} />
            <Drawer.Screen name="Profile" componet={'Profile'} />
        </DrawerNavigator>
    );
};

export default DrawerNavigator;