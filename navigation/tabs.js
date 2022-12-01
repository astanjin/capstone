import React from "react"
import { Image } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, Search, MyLibrary, Wishlist, Login, Welcome, Signup } from "../screens/"
import { icons, COLORS } from "../constants"

const Tab = createBottomTabNavigator()

const tabOptions = {
    showLabel: true,
    style: {
        height: 50,
        backgroundColor: COLORS.gray,
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.blue : COLORS.white;

                    switch (route.name) {
                        case "Store":
                            return (
                                <Image
                                    source={icons.shop_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            )

                        case "Community":
                            return (
                                <Image
                                    source={icons.community}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 22,
                                        height: 22
                                    }}
                                />
                            )

                        case "Wishlist":
                            return (
                                <Image
                                    source={icons.heart_red}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )

                        case "MyLibrary":
                            return (
                                <Image
                                    source={icons.library_icon}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Store"
                component={Home} options={{ headerShown: false }} 
            />
            <Tab.Screen
                name="Community"
                component={Search} options={{ headerShown: false }} 
            />
            <Tab.Screen
                name="Wishlist"
                component={Wishlist} options={{ headerShown: false }} 
            />
            <Tab.Screen
                name="MyLibrary"
                component={MyLibrary} options={{ headerShown: false }} 
            />
        </Tab.Navigator>
    )
}

export default Tabs