import React from 'react'
import {useState} from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { BookDetail, BookDetailForSale, Welcome, Signup, Login, Logout, Cart, Checkout, Profile, AddedToCart, Settings, MyLibrary, BookDetailWishlist } from "./screens/"
import Tabs from "./navigation/tabs"
import { useFonts } from 'expo-font'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator()

const App = () => {

    const [loaded] = useFonts({
            "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
            "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
            "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
        })

    if(!loaded){
        return null
    }
    return (
        <NavigationContainer> 
            <Stack.Navigator
                screenOptions={{
                    headerStyle: false,
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >                
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
                <Stack.Screen name="BookDetailForSale" component={BookDetailForSale} options={{ headerShown: false }} />   
                <Stack.Screen name="BookDetailWishlist" component={BookDetailWishlist} options={{ headerShown: false }} />                
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
                <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="AddedToCart" component={AddedToCart} options={{ headerShown: false }} />
                <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
                <Stack.Screen name="MyLibrary" component={MyLibrary} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>       

    )
}

export default App