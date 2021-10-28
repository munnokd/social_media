import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScree';
import SignupScreen from '../screens/SignupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null)
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true')
                setIsFirstLaunch(true)
            }
            else {
                setIsFirstLaunch(false)
            }
        })
        GoogleSignin.configure({
            webClientId: '844023262268-io7rig2dsabj7o9ojfdju3h0qru1m542.apps.googleusercontent.com',
        });
    }, [])

    if (isFirstLaunch === null) {
        return null
    } else if (isFirstLaunch === true) {
        routeName='Onboarding'
    } else {
        routeName='Login'
    }
    return(
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Onboarding"
                component={OnBoardingScreen}
                options={{header:()=>null}}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{header:()=>null}}
            />
            <Stack.Screen name="Signup" component={SignupScreen} 
            options={{header:()=>null}}
            />
        </Stack.Navigator>
    )
}
