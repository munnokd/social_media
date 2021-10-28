import React, { Component, useContext, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButtons';
import { AuthContext } from '../navigation/AuthProvider';

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confPassword, setConfPassword] = useState()

    const { register,googleLogin,facebookLogin } = useContext(AuthContext)

    const onSignup=()=>{
        if(password===confPassword){
            register(email,password)
            console.log('signup sucsesfull')
        } else {
            alert('In Valid Login Credintial ')
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>

                <Text style={styles.text}>Andaazz</Text>
                <FormInput
                    labelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholderText="Email"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={password}
                    onChangeText={(userPass) => setPassword(userPass)}
                    placeholderText="Password"
                    iconType="lock"
                    secureTextEntry={true}
                />
                <FormInput
                    labelValue={confPassword}
                    onChangeText={(userConfPass) => setConfPassword(userConfPass)}
                    placeholderText="Confirm Password"
                    iconType="lock"
                    secureTextEntry={true}
                />
                <FormButton
                    buttonTitle="Sign Up"
                    onPress={() => onSignup()}
                />

                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>By Registering, you confirm that you accept our </Text>
                    <TouchableOpacity onPress={() => alert("Terms and services")}><Text style={[styles.color_textPrivate, { color: 'coral' }]}>Terms and services</Text></TouchableOpacity>
                    <Text style={styles.color_textPrivate}> and </Text>
                    <Text style={[styles.color_textPrivate, { color: 'coral' }]}>Privacy Policy</Text>
                </View>

                {Platform.OS === 'android' ? (
                    <View>
                        <SocialButton
                            buttonTitle="Sign In with Facebook"
                            btnType="facebook"
                            color="#4867aa"
                            backgroundColor="#e6eaf4"
                            onPress={() => facebookLogin()}
                        />
                        <SocialButton
                            buttonTitle="Sign In with Google"
                            btnType="google"
                            color="#de4d41"
                            backgroundColor="#FDE7EC"
                            onPress={() => googleLogin()}
                        />
                    </View>) : null
                }

                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.navButtonText}>Have an Account? Sign In </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafd',
        padding: 20,
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center'
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'gray'
    }
});
