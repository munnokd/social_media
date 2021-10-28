import { NavigationContainer } from '@react-navigation/native'
import React,{useContext, useEffect, useState} from 'react'
import AuthStack from './AuthStack'
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'
import AppStack from './AppStack'

export default function Routes() {
    const {user,setUser} = useContext(AuthContext)
    const [initializing,setInitializing]=useState(true)

    const onAuthStateChanged=(user)=>{
        setUser(user)
        if(initializing) setInitializing(false)
    }

    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    },[])

    if(initializing) return null;

    return (
            <NavigationContainer>
                {user ? <AppStack/> : <AuthStack/>}
            </NavigationContainer>
    )
}
