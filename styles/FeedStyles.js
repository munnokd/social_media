import styled from 'styled-components'

export const Container=styled.View`
    flex: 1;
    /* justify-content: center; */
    align-items: center;
    background-color: #fff;
    padding: 2px;
`;

export const Card=styled.View`
    background-color: #f8f8f8;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
`
export const UserInfo=styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 15px;
`

export const UserImage=styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 100px;
`
export const UserInfoText=styled.View`
    flex-direction: column;
    justify-content: center;
    margin: 10px;
`
export const UserName=styled.Text`
    font-size: 16px;
    font-weight: bold;
    
`
export const PostTime=styled.Text`
    font-size: 12px;
    color: gray;
`
export const PostText=styled.Text`
    font-size: 14;
    padding-left: 15px;
    padding-right: 15px;
`

export const PostImg=styled.Image`
    width: 100%;
    height: 250px;
    margin-top: 15px;
`
export const Divider=styled.View`
    border-bottom-color:lightgray;
    border-bottom-width:1px ;
    width: 94%;
    align-self: center;
    margin-top: 15px;
`
export const InteractionWrapper=styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
`
export const Interaction=styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 5px;
`
export const InteractionText=styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props=>props.active?'#2e64e5':'black'};
    margin-top: 2px;
    margin-left: 5px;
`
export const InteractionTextCom=styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props=>props.active?'tomato':'black'};
    margin-top: 2px;
    margin-left: 5px;
`