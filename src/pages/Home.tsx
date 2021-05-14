import React from 'react'
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import StatusBar from '../styles/statusBar'
import { Image } from 'react-native'
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/Entypo';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Slider from '../components/HomeSlider';

export default function Home() {
    const { WIDTH, HEIGHT, FONT_ELARGE, ICON_SIZE, DEFAUTL_SPACE, FONT_GLARGE, FONT_MID, BORDER_RADIUS_CIRCULAR } = Numericals();

    console.log(HEIGHT);

    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={[styles.container, { paddingHorizontal: DEFAUTL_SPACE, paddingTop: DEFAUTL_SPACE, }]}>
                <StatusBar color={Colors.SECONDARY} />
                <View style={[styles.search]}>
                    <View style={[styles.searchBar, { backgroundColor: Colors.GREY.WHITE }]}>
                        <AIcon name="search1" size={ICON_SIZE} color={Colors.GREY.SIMPLE} style={{ marginHorizontal: DEFAUTL_SPACE }} />
                        <TextInput placeholder="Search here" />
                    </View>
                    <TouchableOpacity style={[styles.notification, { backgroundColor: Colors.GREY.WHITE, marginLeft: DEFAUTL_SPACE }]}>
                        <FIcon name="bell" size={ICON_SIZE} color={Colors.GREY.SIMPLE} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: DEFAUTL_SPACE }}>
                    <Slider />
                </View>
                <View style={{ marginVertical: DEFAUTL_SPACE, flexDirection: 'column' }}>
                    <Text style={{ fontSize: FONT_MID }}>Choose Categories</Text>
                    <View style={{ flexDirection: 'column', padding: DEFAUTL_SPACE }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: DEFAUTL_SPACE }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.BLUE.Baby_Blue, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                    <EIcon name="direction" size={ICON_SIZE} color={Colors.BLACK} />
                                </View>
                                <Text>NEARBY ADS</Text>
                            </View>

                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.YELLOW, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                    <FIcon name="home" size={ICON_SIZE} color={Colors.BLACK} />
                                </View>
                                <Text>TOLETS</Text>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                    <MCIcon name="chef-hat" size={ICON_SIZE} color={Colors.BLACK} />
                                </View>
                                <Text>CHEF</Text>
                            </View>


                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: DEFAUTL_SPACE }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.BLUE.Baby_Blue, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                    <EIcon name="direction" size={ICON_SIZE} color={Colors.BLACK} />
                                </View>
                                <Text>NEARBY ADS</Text>
                            </View>

                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.YELLOW, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                    <FIcon name="home" size={ICON_SIZE} color={Colors.BLACK} />
                                </View>
                                <Text>TOLETS</Text>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                    <MCIcon name="chef-hat" size={ICON_SIZE} color={Colors.BLACK} />
                                </View>
                                <Text>CHEF</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: DEFAUTL_SPACE }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.BLUE.Baby_Blue, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                    <EIcon name="direction" size={ICON_SIZE} color={Colors.BLACK} />
                                </View>
                                <Text>NEARBY ADS</Text>
                            </View>

                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.YELLOW, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                    <FIcon name="home" size={ICON_SIZE} color={Colors.BLACK} />
                                </View>
                                <Text>TOLETS</Text>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                    <MIcon name="more-horiz" size={ICON_SIZE} color={Colors.BLACK} />
                                </View>
                                <Text>MORE</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        position: 'relative',

    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 40
    },
    notification: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 40
    }
})
