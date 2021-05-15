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
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Slider from '../components/HomeSlider';
import ProductCard from '../components/ProductCard'

export default function Home() {
    const { WIDTH, HEIGHT, FONT_ELARGE, ICON_SIZE, DEFAUTL_SPACE, FONT_GLARGE, FONT_MID, BORDER_RADIUS_CIRCULAR } = Numericals();

    console.log(HEIGHT);

    return (
        <>
            <View style={[styles.search, { paddingHorizontal: DEFAUTL_SPACE }]}>
                <View style={[styles.searchBar, { backgroundColor: Colors.GREY.WHITE }]}>
                    <AIcon name="search1" size={ICON_SIZE} color={Colors.GREY.SIMPLE} style={{ marginHorizontal: DEFAUTL_SPACE }} />
                    <TextInput placeholder="Search here" />
                </View>
                <TouchableOpacity style={[styles.notification, { backgroundColor: Colors.GREY.WHITE, marginLeft: DEFAUTL_SPACE }]}>
                    <FIcon name="bell" size={ICON_SIZE} color={Colors.GREY.SIMPLE} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <SafeAreaView style={[styles.container]}>
                    <StatusBar color={Colors.SECONDARY} />
                    <View style={{ marginVertical: DEFAUTL_SPACE - 3, paddingHorizontal: DEFAUTL_SPACE, backgroundColor: Colors.WHITE, paddingVertical: DEFAUTL_SPACE }}>
                        <Slider />
                    </View>
                    <View style={{ paddingVertical: DEFAUTL_SPACE, flexDirection: 'column', backgroundColor: Colors.WHITE }}>
                        <View style={{ paddingBottom: DEFAUTL_SPACE + 5, paddingHorizontal: DEFAUTL_SPACE, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ fontSize: FONT_MID }}>Browse Categories</Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: FONT_MID, borderBottomColor: Colors.BLACK, borderBottomWidth: 2, borderStyle: 'solid' }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: DEFAUTL_SPACE }}>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: DEFAUTL_SPACE }}>
                                    <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                        <EIcon name="direction" size={2 * ICON_SIZE} color={Colors.BLACK} />
                                    </View>
                                    <Text>NEARBY ADS</Text>
                                </View>

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: DEFAUTL_SPACE }}>
                                    <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.YELLOW, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                        <MCIcon name="home-modern" size={2 * ICON_SIZE} color={Colors.BLACK} />
                                    </View>
                                    <Text>TOLETS</Text>
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: DEFAUTL_SPACE }}>
                                    <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.ROSE_WATER, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                        <MCIcon name="chef-hat" size={2 * ICON_SIZE} color={Colors.BLACK} />
                                    </View>
                                    <Text>CHEF</Text>
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: DEFAUTL_SPACE }}>
                                    <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.MINT, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                        <MCIcon name="table-furniture" size={2 * ICON_SIZE} color={Colors.BLACK} />
                                    </View>
                                    <Text>FURNITURE</Text>
                                </View>

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: DEFAUTL_SPACE }}>
                                    <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                        <SLIcon name="notebook" size={2 * ICON_SIZE} color={Colors.BLACK} />
                                    </View>
                                    <Text>STATIONARY</Text>
                                </View>

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: DEFAUTL_SPACE }}>
                                    <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                        <MCIcon name="chef-hat" size={2 * ICON_SIZE} color={Colors.BLACK} />
                                    </View>
                                    <Text>CHEF</Text>
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: DEFAUTL_SPACE }}>
                                    <View style={{ padding: DEFAUTL_SPACE, backgroundColor: Colors.CYAN, borderRadius: BORDER_RADIUS_CIRCULAR, marginBottom: DEFAUTL_SPACE }}>
                                        <MCIcon name="chef-hat" size={2 * ICON_SIZE} color={Colors.BLACK} />
                                    </View>
                                    <Text>CHEF</Text>
                                </View>

                            </View>
                        </ScrollView>

                    </View>


                    <View style={{ marginVertical: DEFAUTL_SPACE - 3, backgroundColor: Colors.WHITE, paddingVertical: DEFAUTL_SPACE, paddingBottom: 60 }}>
                        <ScrollView style={{ flex: 1 }}>
                            <Text style={{ fontSize: FONT_MID, marginHorizontal: DEFAUTL_SPACE }}>Fresh Recommendations</Text>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                                <ProductCard />
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>

            </ScrollView >
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        position: 'relative',

    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: Colors.WHITE
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
