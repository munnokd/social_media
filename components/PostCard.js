import React from 'react'
import { Text } from 'react-native'
import { Card, Container, Divider, Interaction, InteractionText, InteractionWrapper, PostImg, PostText, PostTime, UserImage, UserInfo, UserInfoText, UserName,InteractionTextCom } from '../styles/FeedStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const PostCard = ({ item }) => {

    likeIcon=item.liked?'heart':'heart-outline';
    likeIconColor=item.liked?'#2e64e5':'black';

    commentIcon=item.comments?'md-chatbubble':'md-chatbubble-outline';
    commentIconColor=item.comments?'tomato':'black';

    if (item.likes==1){
        likeText='1 Like'
    }else if(item.likes>1){
        likeText=item.likes+' Likes'
    }else {
        likeText='Like'
    }

    if (item.comment==1){
        commentText='1 Comment'
    }else if(item.comment>1){
        commentText=item.comment+' Comments'
    }else {
        CommentText='Comment'
    }

    return (
        <Card>
            <UserInfo>
                <UserImage source={item.userImage} />
                <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.postTime}</PostTime>
                </UserInfoText>
            </UserInfo>
            <PostText>{item.post}</PostText>
            {item.postImage!='none'?<PostImg source={item.postImage} /> : <Divider/>}
            
            <InteractionWrapper>
                <Interaction>
                    <Ionicons name={likeIcon} size={25} color={likeIconColor} />
                    <InteractionText active={item.liked}>{likeText}</InteractionText>
                </Interaction>
                <Interaction>
                    <Ionicons name={commentIcon} size={25} color={commentIconColor} />
                    <InteractionTextCom active={item.comments}>{commentText}</InteractionTextCom>
                </Interaction>
            </InteractionWrapper>
        </Card>
    )
}

export default PostCard

