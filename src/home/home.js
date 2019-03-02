import React, { Component } from 'react';
import { ScrollView, StatusBar, Text, View, Image, } from 'react-native';
import CustomHeader from '../header'
import { Icon, Header, Left, Right, Body, Button } from 'native-base';


export default class Layout extends Component {

    render() {
        return (
            <ScrollView style={{ height: null, width: null, backgroundColor: '#fff', }}>
                <CustomHeader onPress={() => this.props.navigation.openDrawer()}></CustomHeader>
                <Image style={{ width: null, height: 200 }} source={require('../../assets/img/001.jpg')} />

                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontWeight: '900', paddingTop: 10, fontSize: 15 }}>EXHIBITION</Text>
                    <Text style={{ fontSize: 30, fontWeight: '500', paddingTop: 10, color: '#000', }}>
                        {`MASTER\nODL AND\nNEW`}
                    </Text>
                    <Text style={{ fontSize: 25, fontWeight: '400', paddingTop: 12, color: '#ef5349', }}>APRIL 15 - SEPTEMBER 20</Text>
                    <Text style={{ fontWeight: '500', paddingTop: 8, fontSize: 13 }}>FLOOR 5</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', }}>
                    <Body>
                        <Button block style={{ backgroundColor: '#ef5349', height: 35, width: 230,marginTop:10 }}>
                            <Text style={{ color: "#fff", alignSelf: 'center', fontWeight: '600' }}>Plan Your Visit</Text>
                        </Button>
                    </Body>
                </View>
                <View style={{ paddingTop: 10, flexDirection: 'row' }}>
                    <Left style={{ flexDirection: 'row', paddingLeft: 10 }}>
                        <Icon type='MaterialIcons' name='place' style={{ fontSize: 35, color: "#ef5349" }} />
                        <Text style={{ fontSize: 15, fontWeight: '900', color: "#ef5349" }}>{`153 3rd St\nSan Francisco, CA 94103`}</Text>
                    </Left>
                    <Right style={{ justifyContent: 'flex-end',flexDirection: 'row', paddingTop: 10, paddingRight: 10, }}>
                        <Icon type='MaterialIcons' name='access-time' style={{  fontSize: 35, color: "#ef5349" }} />
                        <Text style={{ fontSize: 15, fontWeight: '900', color: "#ef5349" }}>{`Open today\n10:00am - 5:30pm`}</Text>
                    </Right>
                </View>

            </ScrollView >
        );
    }
}