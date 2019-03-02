
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Icon, Header, Left, Body, Right } from 'native-base';
function CustomHeader(props) {

    return (
        <Header style={{ backgroundColor: "#fff" }}>

            <Left style={{flex:1}}>
                <Icon name='menu' onPress={props.onPress} />

            </Left>
            <Body style={{alignItems:'center', justifyContent: 'center',}}>
                <Text style={{color: "#ef5349", fontSize: 23, fontWeight: '400',}}>{props.title}</Text>
            </Body>
            <Right style={{flex:1}}>
                <Text style={{ fontSize: 12, fontWeight: '400', color: '#000', }}>
                    {`YOUR\nART\nMUSEUM`}
                </Text>
            </Right>
        </Header>
    );

}

export default CustomHeader;