import React, { useState,useEffect } from 'react'
import { View,  StyleSheet,TouchableWithoutFeedback, Keyboard, Platform, Text , LogBox} from 'react-native'
import { InputField, InputWrapper, SubmitBtn,BtnText, AddImage } from '../styles/AddPost'
import ActionButton from 'react-native-action-button';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ImagePicker from 'react-native-image-crop-picker';


export default function AddPostScreen() {
    const [image,setImage] =useState(null)

    const takePhotoFromCamera=()=>{
        ImagePicker.openCamera({
            width: 1200,
            height: 780,
            cropping:true,
        }).then((image)=>{
            console.log(image)
            setImage(image.path)
        })
    }

    const choosePhotoFromLibrary=()=>{
        ImagePicker.openPicker({
            width: 1200,
            height: 780,
            cropping:true,
        }).then((image)=>{
            console.log(image)
            setImage(image.path)
        })
    }

    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <InputWrapper>
                    {image!=null?<AddImage source={{uri:image}} />:null}
                    <InputField
                        placeholder="What's on Your Mind"
                        multiline
                        numberOfLines={4}
                    />
                    <SubmitBtn onPress={()=>{}}>
                        <BtnText>Post</BtnText>
                    </SubmitBtn>
                </InputWrapper>
                <ActionButton buttonColor="dodgerblue">
                    <ActionButton.Item buttonColor='tomato' title="Gallery" onPress={choosePhotoFromLibrary}>
                        <Foundation name="photo" size={28} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='tomato' title="Take Photo" onPress={takePhotoFromCamera}>
                        <MaterialIcons name="add-a-photo" size={28}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
