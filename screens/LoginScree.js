import React, { Component, useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButtons';
import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const { login,googleLogin,facebookLogin } = useContext(AuthContext)

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container} >
                <Image
                    source={require('../assets/login.png')}
                    style={styles.logo}
                />
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
                <FormButton
                    buttonTitle="Sign In"
                    onPress={() => login(email, password)}
                />
                <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                    <Text style={styles.navButtonText}>Forgot Password</Text>
                </TouchableOpacity>

                {Platform.OS === 'android' ?
                    (<View>
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
                    </View>)
                    : null
                }

                <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.navButtonText}>Don't Have an account? Sign Up </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafd',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    },
});

export default LoginScreen;
