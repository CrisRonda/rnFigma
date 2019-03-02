import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import {NavigationActions} from 'react-navigation';

// Cambiar los View por TouchableOpacity para la navegacion entre pantallas en el drawer
export default class CustomDrawer extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#ef5349' }}>
                <Content style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, }}>
                        <Icon type="MaterialIcons" name="search" style={{ color: '#fff', fontSize: 35, }} />
                        <Text style={{ color: '#fff', paddingLeft: 30, fontSize: 20 }}>Search</Text>
                    </View>

                    <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, }} onPress={()=>this.props.navigation.navigate('Exhibition')}>
                        <Icon type="MaterialIcons" name="grid-on" style={{ color: '#fff', fontSize: 35, }} />
                        <Text style={{ color: '#fff', paddingLeft: 30, fontSize: 20 }}>{`Exhibitions & Events`}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, }}>
                        <Icon type="MaterialIcons" name="art-track" style={{ color: '#fff', fontSize: 35, }} />
                        <Text style={{ color: '#fff', paddingLeft: 30, fontSize: 20 }}>{`Artists & Artworks`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, }}>
                        <Icon type="MaterialIcons" name="collections-bookmark" style={{ color: '#fff', fontSize: 35, }} />
                        <Text style={{ color: '#fff', paddingLeft: 30, fontSize: 20 }}>{`Collections`}</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, }} onPress={()=>this.props.navigation.navigate('Home')}>
                        <Icon type="MaterialIcons" name="event-available" style={{ color: '#fff', fontSize: 35, }} />
                        <Text style={{ color: '#fff', paddingLeft: 30, fontSize: 20 }}>{`Plan Your Visit`}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, }}>
                        <Icon type="MaterialIcons" name="card-membership" style={{ color: '#fff', fontSize: 35, }} />
                        <Text style={{ color: '#fff', paddingLeft: 30, fontSize: 20 }}>{`Become a Member`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, }}>
                        <Icon type="MaterialIcons" name="card-giftcard" style={{ color: '#fff', fontSize: 35, }} />
                        <Text style={{ color: '#fff', paddingLeft: 30, fontSize: 20 }}>{`Shop`}</Text>
                    </View>
                </Content>
            </Container>

        );
    }
}