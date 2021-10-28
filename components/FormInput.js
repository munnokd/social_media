import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { windowHeight, windowWidth } from '../utils/Diemensions';

const FormInput = ({labelValue,placeholderText,iconType,...rest}) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <AntDesign name={iconType} size={25} color="#666" />
            </View>
            <TextInput
                style={styles.input}
                value={labelValue}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer:{
        marginTop:5,
        marginBottom:10,
        width: '100%',
        height: windowHeight/15,
        borderColor:'#ccc',
        borderRadius:3,
        borderWidth:1,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    iconStyle:{
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor:'#ccc',
        borderRightWidth:1,
        width: 50,
    },
    input:{
        padding: 10,
        flex: 1,
        fontSize:16,
        color:'#333',
        justifyContent:'center',
        alignItems: 'center',
    },
    inputField:{
        padding: 10,
        marginTop:5,
        marginBottom:10,
        height: windowHeight/15,
        width: windowWidth/15,
        fontSize:15,
        borderRadius:8,
        borderWidth:1,
    }
});

export default FormInput;
