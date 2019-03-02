import React, { Component } from 'react';
import { ScrollView, StatusBar, Text, View, ImageBackground, TextInput, Button } from 'react-native';



export default class Layout extends Component {
    render() {
        return (
            <ImageBackground source={require("../../assets/img/001.jpg")} style={{ flex: 1, width: '100%', height: '100%', }} >
            <StatusBar translucent={true} backgroundColor={'transparent'} ></StatusBar>
                <ScrollView style={{ flex: 1, flexDirection: 'column', paddingLeft: '18%', }} >
                    <View style={{ width: null, height: 100 }}></View>
                    <Text style={{ fontSize: 40, fontWeight: '400', color: '#FFF', }}>
                        {`YOUR\nART\nMUSEUM`}
                    </Text>
                    <Text style={{ fontSize: 12, color: '#FFF', }}>
                        {`151 3rd ST\nSan Francisco, CA 94103`}
                    </Text>
                    <TextInput style={{ width: 230, height: 45, backgroundColor: '#fff', marginTop: 30 }} placeholder="Email address" />
                    <TextInput style={{ width: 230, height: 45, backgroundColor: '#fff', marginTop: 5 }} placeholder="Password" />
                    <View style={{ alignItems: 'flex-end', marginTop: 5, width: 230 }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#FFF', }}>
                            {`Forgot your password?`}
                        </Text>
                    </View>
                    <View style={{ height: 45, marginTop: 20, width: 230 }}>
                        <Button
                            title="Log in"
                            color='#ef5349'
                         onPress={()=> this.props.navigation.navigate('Home')}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-start', marginTop: 2, width: 230 }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#FFF', }}>
                            {`Don't have an account?`}
                        </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}