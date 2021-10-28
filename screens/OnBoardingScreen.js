import React from 'react';
import { View, Text, Button,Image, StyleSheet, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dot=({selected})=>{
    let backgroundColor;
    backgroundColor=selected?'rgba(0,0,0,0.8)':'rgba(0,0,0,0.3)'
    return (
        <View style={{
            width: 5,
            height:5,
            marginHorizontal:3,
            backgroundColor
        }}>

        </View>
    )
}
const Skip=({...props})=>(
    <TouchableOpacity
        style={{marginLeft:10,}}
        {...props}
    ><Text style={{color:'black',fontSize:19,}}>Skip</Text></TouchableOpacity>
)
const Next=({...props})=>(
    <TouchableOpacity
        style={{marginRight:10,}}
        {...props}
    ><Text style={{color:'black',fontSize:19,}}>Next</Text></TouchableOpacity>
)
const Done=({...props})=>(
    <TouchableOpacity
        style={{marginRight:10,}}
        {...props}
    ><Text style={{color:'black',fontSize:19,}}>Done</Text></TouchableOpacity>
)

const OnBoardingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Onboarding
                SkipButtonComponent={Skip}
                NextButtonComponent={Next}
                DoneButtonComponent={Done}
                DotComponent={Dot}
                onSkip={()=>navigation.replace("Login")}
                onDone={()=>navigation.navigate("Login")}
                pages={[
                    {
                        backgroundColor: 'coral',
                        image: <Image  source={require('../assets/onboarding-img1.png')} />,
                        title: 'Connect to the world',
                        subtitle: 'A New Way To connect With The World',
                    },
                    {
                        backgroundColor: '#fdeb93',
                        image: <Image source={require('../assets/onboarding-img2.png')} />,
                        title: 'Share Your Things',
                        subtitle: 'Share Your Post In World',
                    },
                    {
                        backgroundColor: '#fdeb',
                        image: <Image source={require('../assets/onboarding-img3.png')} />,
                        title: 'Become A Influencer',
                        subtitle: 'SLet The People See You',
                    },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default OnBoardingScreen;
