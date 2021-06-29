import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import StatusBarTemplate from '../styles/statusBar';
import AIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import OCIcon from 'react-native-vector-icons/Octicons';
import IOIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';
import FIcon from 'react-native-vector-icons/Fontisto';
import EIcon from 'react-native-vector-icons/Entypo';
import { advertisments } from '../constants/categories';
import Header from '../components/Header';
import * as yup from 'yup';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Carousel from 'react-native-snap-carousel';
import Spinner from 'react-native-loading-spinner-overlay';
import { SliderBox } from "react-native-image-slider-box";

const ShowAds = (props) => {
    const { WIDTH, HEIGHT, FONT_ELARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, BUTTON_PADDING, DEFAUTL_SPACE, BORDER_WIDTH_SMALL, BORDER_WIDTH, FONT_GLARGE, FONT_MID, BORDER_RADIUS_CIRCULAR } = Numericals();
    const currentUser = auth().currentUser?.uid;
    const [heartPress, setHeartPress] = useState(false);
    const [imgUrls, setImgUrls] = useState<any>([]);
    useEffect(() => {
        props.route.params.url.map(value => {
            setImgUrls(url => [...url, value.url])
        })
    }, [])
    const HeaderTemplate = () => {
        return (
            <View style={[styles.header, { padding: DEFAUTL_SPACE, position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }]}>
                <TouchableOpacity style={{ paddingRight: INLINE_GAP }} onPress={res => props.navigation.pop()}>
                    <AIcon name="arrowleft" size={ICON_SIZE} color={Colors.WHITE} />
                </TouchableOpacity>
                <AIcon name="sharealt" size={ICON_SIZE} color={Colors.WHITE} />
            </View>
        )
    }
    return (
        <>
            <StatusBarTemplate color={Colors.QUARTZ} />
            <HeaderTemplate />
            <View style={[styles.container, { backgroundColor: Colors.WHITE }]}>
                <View style={[styles.element]}>
                    {/* <Image source={{ uri: imgUrls[0] }} style={{ width: WIDTH, height: '100%' }} /> */}
                    <View style={{ width: '100%', height: '100%' }}>
                        <SliderBox images={imgUrls} />
                    </View>
                </View>
                <View style={{ flex: 0.4, flexGrow: 1, justifyContent: 'flex-start', alignItems: 'stretch', paddingHorizontal: DEFAUTL_SPACE }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: FONT_ELARGE }}>{props.route.params.Price}</Text>
                        <TouchableOpacity onPress={res => setHeartPress(res => !res)}>
                            {heartPress ? <AIcon name="hearto" size={ICON_SIZE + 5} color={Colors.BLACK} /> : <AIcon name="heart" size={ICON_SIZE + 5} color={Colors.RED} />}
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: FONT_MID }}>{props.route.params.Description}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <MIcon name="location-on" size={ICON_SIZE} />
                        <Text style={{ fontSize: FONT_MID, paddingLeft: DEFAUTL_SPACE / 2 }}>{props.route.params.Location}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: Colors.WHITE, justifyContent: 'space-between', alignItems: 'stretch', paddingHorizontal: DEFAUTL_SPACE, paddingVertical: DEFAUTL_SPACE }}>
                <TouchableOpacity style={{ flex: 0.49, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.BLACK, paddingVertical: BUTTON_PADDING, borderRadius: BORDER_RADIUS }} >
                    <IOIcon name="chatbubble-outline" size={ICON_SIZE} color={Colors.WHITE} />
                    <Text style={{ color: Colors.WHITE, fontSize: FONT_MID, fontWeight: '900', paddingLeft: DEFAUTL_SPACE }}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.49, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: BUTTON_PADDING, backgroundColor: Colors.BLACK, borderRadius: BORDER_RADIUS }} onPress={res => props.navigation.navigate('Home')}>
                    <MCIcon name="offer" size={ICON_SIZE} color={Colors.WHITE} />
                    <Text style={{ color: Colors.WHITE, fontSize: FONT_MID, fontWeight: '900', paddingLeft: DEFAUTL_SPACE }}>Make Offer</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ShowAds;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    element: {
        flex: 0.6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
})
