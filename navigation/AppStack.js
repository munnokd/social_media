import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AddPostScreen from '../screens/AddPostScreen';

const Stack=createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    headerTitle:'',
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color: 'dodgerblue',
                        fontSize:18
                    },
                    headerShadowVisible:false,
                    headerRight:()=>(
                        <View style={{marginRight:10}}>
                            <TouchableOpacity onPress={()=>navigation.navigate('AddPost')}>
                            <Feather
                                name="plus"
                                color='dodgerblue'
                                size={25}
                            />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            <Stack.Screen
                name="AddPost"
                component={AddPostScreen}
                options={{
                    headerShown:false,
                    title:'',
                    headerBackVisible:false,
                    headerBackImage:()=>(
                        <View>
                            
                        </View>
                    )
                }}
            />
        </Stack.Navigator>
    )
}
const AppStack = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor:'#2e64e5'
            }}
        >
            <Tab.Screen
                name="Home"
                component={FeedStack}
                options={{
                    headerShown:false,
                    // tabBarLabel:'Home',
                    tabBarIcon:()=>(
                        <Ionicons
                            name="home"
                            color="dodgerblue"
                            size={25}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Messages"
                component={ChatScreen}
                options={{
                    headerShown:false,
                    // tabBarLabel:'chat',
                    tabBarIcon:()=>(
                        <Ionicons
                            name="chatbox-ellipses-outline"
                            color="dodgerblue"
                            size={25}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown:false,
                    // tabBarLabel:'profile',
                    tabBarIcon:()=>(
                        <Ionicons
                            name="person-outline"
                            color="dodgerblue"
                            size={25}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default AppStack
