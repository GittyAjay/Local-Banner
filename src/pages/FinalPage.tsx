import React, { useState } from 'react'
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

const Categories = (props) => {
    const { WIDTH, HEIGHT, FONT_ELARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, BUTTON_PADDING, DEFAUTL_SPACE, BORDER_WIDTH_SMALL, BORDER_WIDTH, FONT_GLARGE, FONT_MID, BORDER_RADIUS_CIRCULAR } = Numericals();
    const [resourcePath, setResourcePath] = useState<string>();
    const [fileName, setFileName] = useState<any>();
    const [downloadURI, setDownloadURI] = useState<any>();
    const [isLoading, setLoading] = useState({ isLoading: false, status: '' });
    const [lodingStart, setLodingStart] = useState(false);
    const [id, setId] = useState(props.route.params.id);
    console.log(props.route.params.id);
    const currentUser = auth().currentUser?.uid;
    return (
        <>
            <StatusBarTemplate color={Colors.GREEN_SHADE} />
            <View style={[styles.container, { backgroundColor: Colors.WHITE }]}>
                <View style={[styles.element, { backgroundColor: Colors.GREEN_SHADE }]}>
                    <AIcon name="checkcircleo" color={Colors.WHITE} size={80} style={{ paddingBottom: INLINE_GAP }} />
                    <Text style={{ fontSize: FONT_ELARGE, color: Colors.WHITE }}>CONGRUTULATIONS!</Text>
                    <Text style={{ fontSize: FONT_MID, color: Colors.WHITE }}>Your add is live now</Text>

                </View>
                <View style={{ flex: 0.4 }}>

                </View>
            </View>
            <View style={{ backgroundColor: Colors.WHITE, justifyContent: 'center', alignItems: 'stretch', paddingHorizontal: DEFAUTL_SPACE, paddingVertical: DEFAUTL_SPACE }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.BLACK, paddingVertical: BUTTON_PADDING, borderRadius: BORDER_RADIUS, marginBottom: DEFAUTL_SPACE }} >
                    <Text style={{ color: Colors.WHITE, fontSize: FONT_MID, fontWeight: '900' }}>Sell Faster Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: BUTTON_PADDING, borderRadius: BORDER_RADIUS, borderWidth: 2 * BORDER_WIDTH, borderColor: Colors.BLACK }} onPress={res => props.navigation.navigate('Home')}>
                    <Text style={{ color: Colors.BLACK, fontSize: FONT_MID, fontWeight: '900' }}>Preview Ad</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Categories

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
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 55,
        backgroundColor: Colors.WHITE,
        borderBottomColor: Colors.HOME_BCK,
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
})
