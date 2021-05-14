import { Colors } from '../constants/color'
import React, { useState, useRef } from 'react';
import StatusBar from '../styles/statusBar'
import LottieView from 'lottie-react-native'
import { Numericals } from '../constants/numerical';
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/EvilIcons';
import { View, Text, StyleSheet, Pressable, Animated, Image, ImageBackground } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient'

const Slider = () => {

    const { ICON_SIZE, BUTTON_HEIGHT, DEFAUTL_SPACE, FONT_SMALL, FONT_GLARGE, FONT_LARGE, FONT_MID, HEIGHT, WIDTH, BORDER_RADIUS_CIRCULAR, INLINE_GAP, BORDER_RADIUS, BORDER_WIDTH } = Numericals();
    const Slides = [
        {
            title: "Hot Sale",
            number: 40,
            description: 'OFF',
            url: require("../assets/images/offer1.png"),
            index: 1
        },
        {
            title: "Discount",
            number: 40,
            description: 'OFF',
            url: require("../assets/images/offer2.png"),
            index: 2
        },
        {
            title: "Hurry up",
            number: 50,
            description: 'discount',
            url: require("../assets/images/offer1.png"),
            index: 3
        },
    ];

    const renderItem = ({ item, index }: { item: any, index: number }) => {
        return (
            <LinearGradient
                start={{ x: 0.1, y: 0 }}
                end={{ x: 0, y: 0.5 }}
                colors={['#FA26A0', Colors.PRIMARY]}
                style={[styles.linearGradient, { borderRadius: BORDER_RADIUS, padding: 2 * DEFAUTL_SPACE }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch', borderRadius: BORDER_RADIUS }}>
                    <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: FONT_GLARGE, color: Colors.WHITE, fontFamily: 'Museo700-Regular' }}>{item.title}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: FONT_GLARGE, color: Colors.WHITE, fontWeight: 'bold' }}>{item.number}%</Text>
                            <Text style={{ fontSize: FONT_GLARGE, color: Colors.WHITE, paddingLeft: DEFAUTL_SPACE }}>{item.description}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <Image source={item.url} resizeMode="contain" style={{ width: 200, height: 100 }} />
                    </View>
                </View>
            </LinearGradient>
        )
    }
    return (
        <View>
            <View>
                <Carousel
                    layout={'default'}
                    data={Slides}
                    renderItem={renderItem}
                    sliderWidth={390}
                    itemWidth={390}
                />
            </View>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    defaultTxt: {
        fontFamily: 'Museo700-Regular'
    },
    linearGradient: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 150,

    },
})

