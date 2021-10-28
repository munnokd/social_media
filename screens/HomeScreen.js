import React from 'react'
import { FlatList, Text } from 'react-native'
import PostCard from '../components/PostCard'
import { Container } from '../styles/FeedStyles'

const Posts=[
    {
        id:'1',
        userName:'Kalp Prajapati',
        userImage:require('../assets/users/kd.jpg'),
        postTime:'4 min ago',
        post:'hey there how are you here',
        postImage:require('../assets/posts/post1.png'),
        liked:true,
        likes:'14',
        comments:true,
        comment:'5'
    },
    {
        id:'2',
        userName:'kd Prajapati',
        userImage:require('../assets/users/user2.jpg'),
        postTime:'4 min ago',
        post:'hey there how are you here hahihuifhuifuibbfibriubuibubf',
        postImage:require('../assets/posts/post2.png'),
        liked:false,
        likes:'0',
        comments:false,
        comment:'0'
    },
    {
        id:'3',
        userName:'Kalp Prajapati',
        userImage:require('../assets/users/user3.jpg'),
        postTime:'4 min ago',
        post:'hey there how are you here',
        postImage:require('../assets/posts/post3.jpg'),
        liked:true,
        likes:'8',
        comments:true,
        comment:'1'
    },
    {
        id:'4',
        userName:'DA Prajapati',
        userImage:require('../assets/users/user4.jpg'),
        postTime:'4 min ago',
        post:'hey there how are you here',
        postImage:'none',
        liked:true,
        likes:'5000',
        comments:true,
        comment:'200'
    },
    {
        id:'5',
        userName:'Prajapati Kalp',
        userImage:require('../assets/users/user5.png'),
        postTime:'4 min ago',
        post:'hey there how are you here',
        postImage:require('../assets/posts/post5.png'),
        liked:false,
        comments:true,
        likes:'604',
        comment:'69'
    },
]

const HomeScreen = () => {

    return (
        <Container>
            <FlatList 
                data={Posts}
                renderItem={({item})=><PostCard item={item} />}
                keyExtractor={item=>item.id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}

export default HomeScreen


