import React, { Component } from 'react';
import { ScrollView, FlatList, Text, View, Image, } from 'react-native';
import CustomHeader from '../header'
import { Icon, Header, Left, Right, Body, Container } from 'native-base';

const photos = [
    { image: "http://cdn8.openculture.com/wp-content/uploads/2015/03/getty-free.jpg" },
    { image: "http://www.poussiereinfo.fr/wp-content/uploads/2013/08/dustbowl-2-2.jpg" },
    { image: "https://www.artberlin.de/files/2012/04/Dorothea-Lange_Migrant-Mother_Fotografie.jpg" },
    { image: "http://www.historyplace.com/unitedstates/lange/dor12-141.jpg" },
    { image: "http://www.historyplace.com/unitedstates/lange/dor12-144.jpg" },
]

export default class Layout extends Component {
    render_image(item) {
        return (
            // console.log(item)
            <Image style={{ width: 250, height: 250 }} source={{ uri: item.item.image }}></Image>
            // <Text>{item.item.image}</Text>
        );
    }
    render() {
        var dummy = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        var dummy2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        return (
            <ScrollView style={{ height: null, width: null, backgroundColor: '#fff', }}>
                <CustomHeader title="Exhibition y Preview" onPress={() => this.props.navigation.openDrawer()}></CustomHeader>
                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontWeight: '600', paddingTop: 8, fontSize: 14 }}>RETROSPECTIVE</Text>
                    <Text style={{ fontSize: 30, fontWeight: '400', paddingTop: 8, color: '#000', }}>
                        {`DOROTHEA\nLANGE`}
                    </Text>
                    <Text style={{ fontSize: 25, fontWeight: '400', paddingTop: 8, color: '#ef5349', }}>OCTOBER 15 - MARCH 18</Text>
                    <Text style={{ fontWeight: '500', paddingTop: 5, fontSize: 13 }}>FLOOR 3</Text>
                </View>
                {/* IMAGES */}
                <View style={{ flex: 1, justifyContent: 'center', marginTop: 8, }}>
                    <FlatList
                        style={{ alignContent: 'center', alignSelf: 'center', width: 250, height:150, marginBottom: 10, }}
                        
                        data={photos}
                        renderItem={(item) => this.render_image(item)}
                        ItemSeparatorComponent={() => <View style={{ width: '1%' }} />}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom:10 }}>
                    <Left></Left>
                    <Body style={{ flexDirection: 'row', width: 40, alignSelf: 'center', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', width: 40, height: 1, }}>
                            <Container style={{ marginRight: 2, paddingLeft: 8, borderRadius: 4, width: 8, height: 8, backgroundColor: '#808080' }}></Container>
                            <Container style={{ marginRight: 2, paddingLeft: 8, borderRadius: 4, width: 8, height: 8, backgroundColor: '#808080' }}></Container>
                            <Container style={{ marginRight: 2, paddingLeft: 8, borderRadius: 4, width: 8, height: 8, backgroundColor: '#808080' }}></Container>
                            <Container style={{ marginRight: 2, paddingLeft: 8, borderRadius: 4, width: 8, height: 8, backgroundColor: '#808080' }}></Container>
                            <Container style={{ marginRight: 2, paddingLeft: 8, borderRadius: 4, width: 8, height: 8, backgroundColor: '#808080' }}></Container>
                        </View>
                    </Body>
                    <Right></Right>
                </View>
                <View>
                    <Body style={{ alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'column' }}>
                        <Text style={{ color: "#808080", fontSize: 12, fontWeight: 'normal' }}>{`Abandoned Dust Bowl Home`}</Text>
                        <Text style={{ color: "#808080", fontSize: 12, fontWeight: 'normal' }}>{`Celatin silver print`}</Text>
                        <Text style={{ color: "#808080", fontSize: 12, fontWeight: 'normal' }}>{`about 1935-1940`}</Text>
                    </Body>
                </View>
                <View style={{ paddingLeft: 15, flexDirection: 'column' }}>
                    <Text style={{ fontWeight: '900', paddingTop: 10, fontSize: 15 }}>BIOGRAPHY</Text>
                    <Text style={{ fontWeight: 'normal', paddingTop: 10, fontSize: 15, paddingRight: 15, justifyContent:'flex-start' }}>{dummy + dummy2+dummy + dummy2}</Text>
                </View>

            </ScrollView >
        );
    }
}