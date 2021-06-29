import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Pressable, ScrollView, Platform, StatusBar, Alert, Image, addons } from 'react-native'
import { Colors } from '../constants/color';
import { Numericals } from '../constants/numerical';
import AIcon from 'react-native-vector-icons/AntDesign';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import FIcon from 'react-native-vector-icons/Fontisto';
import EIcon from 'react-native-vector-icons/Entypo';
import { connect, useSelector } from 'react-redux'
const AddsByCategories = (props) => {
    const { ICON_SIZE, DEFAUTL_SPACE, FONT_LARGE, FONT_SMALL, FONT_MID, BORDER_WIDTH, BORDER_RADIUS, INLINE_GAP, HEIGHT } = Numericals();
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(0);
        props.advertisments.map(value => {
            if (value._type == props.route.params.type) {
                setCount(prev => prev + 1);
            }
        })
    }, [])

    return (
        <>
            <View style={[styles.search, { paddingHorizontal: DEFAUTL_SPACE, paddingVertical: DEFAUTL_SPACE }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'flex-start', paddingBottom: DEFAUTL_SPACE }}>
                    <EIcon name="location-pin" size={ICON_SIZE} />
                    <Text>Susuwahi,Varanasi</Text>
                    <AIcon name="down" size={ICON_SIZE - 3} color={Colors.GREY.SIMPLE} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.searchBar, { backgroundColor: Colors.WHITE }]}>
                        <AIcon name="search1" size={ICON_SIZE} color={Colors.GREY.SIMPLE} style={{ marginHorizontal: DEFAUTL_SPACE }} />
                        <TextInput placeholder="Search here" />
                    </View>
                    <TouchableOpacity style={[styles.notification, { marginLeft: DEFAUTL_SPACE }]}>
                        <FIcon name="bell" size={ICON_SIZE} color={Colors.BLACK} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.container]}>
                <View style={{ paddingVertical: INLINE_GAP, borderWidth: BORDER_WIDTH, borderColor: Colors.HOME_BCK, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: FONT_LARGE, fontWeight: 'bold', paddingRight: DEFAUTL_SPACE / 2 }}>{count}</Text>
                    <Text style={{ fontSize: FONT_LARGE }}>Ads found</Text>
                </View>
                <ScrollView style={{ flexDirection: 'column', maxHeight: HEIGHT }}>
                    {props.advertisments && props.advertisments.map((val, key) => {
                        if (val._type == props.route.params.type)
                            return (
                                <View key={key} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', borderWidth: BORDER_WIDTH, borderColor: Colors.HOME_BCK, paddingVertical: 2 }}>
                                    <Image source={{ uri: val.url[0].url }} resizeMode='stretch' style={{ width: 190, height: 150 }} />

                                    <View style={{ flexDirection: 'column', paddingLeft: INLINE_GAP, justifyContent: 'space-between', alignItems: 'stretch' }}>
                                        <View>
                                            <Text style={{ fontWeight: 'bold', fontSize: FONT_MID }}>{`\u20B9`} {val.Price}</Text>
                                            <Text>{val.Title}</Text>
                                        </View>
                                        <Text>{val.Location}</Text>
                                    </View>
                                </View>
                            )
                    })}
                </ScrollView>
            </View>
        </>
    )
}
const mapStateToProps = (props) => {
    // console.log(props);
    return {
        advertisments: props.project.advertisments,
    }
}

export default connect(mapStateToProps)(AddsByCategories);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    search: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 90,
        backgroundColor: Colors.GREY.WHITE
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: Colors.WHITE
    },
    notification: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 40
    },
    shadow: {
        shadowColor: Colors.GREY.SIMPLE,
        shadowOpacity: 0.9,
        shadowRadius: 3.3,
        elevation: 1,
    }

})
