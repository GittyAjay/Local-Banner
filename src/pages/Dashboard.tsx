import Animated from 'react-native-reanimated';
import { Colors } from '../constants/color'
import React, { useState, useRef } from 'react';
import StatusBar from '../styles/statusBar'
import LottieView from 'lottie-react-native'
import { Numericals } from '../constants/numerical';
import MIcon from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Dashboard(props: { navigation: { push: Function } }) {

    const { BUTTON_HEIGHT, DEFAUTL_SPACE, FONT_SMALL, FONT_LARGE, FONT_MID, HEIGHT, WIDTH, BORDER_RADIUS_CIRCULAR, INLINE_GAP } = Numericals();
    const [activeIndex, setActiveIndex] = useState(1);
    const Slides = [
        {
            title: "Search Your Feed",
            descrption: 'we can search all your need here',
            url: require("../assets/images/welcome1.json"),
            index: 1
        },
        {
            title: "Find Nearby",
            descrption: 'Everthing nearby like cook,pg,hotels(oyo bhai)',
            url: require("../assets/images/welcome2.json"),
            index: 2
        },
        {
            title: "Book Pg",
            descrption: 'Book Pg in minute',
            url: require("../assets/images/welcome3.json"),
            index: 3
        },
        {
            title: "Find more",
            descrption: 'We have more things,explore here',
            url: require("../assets/images/welcome4.json"),
            index: 4
        },
    ];
    const renderItem = ({ item, index }: { item: any, index: number }) => {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <View>
                    <Text style={[styles.description, { fontSize: scale(FONT_LARGE), color: Colors.WHITE }]}>{item.title}</Text>
                </View>
                <View style={{ marginVertical: DEFAUTL_SPACE }}>
                    <Text style={[styles.description, { fontSize: scale(FONT_SMALL), color: Colors.WHITE }]}>{item.descrption}</Text>
                </View>
                <LottieView
                    style={{ marginTop: scale(50) }}
                    source={item.url}
                    autoPlay
                    loop
                />

            </View>
        )
    }
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: Colors.PRIMARY }]}>
            <StatusBar color={Colors.PRIMARY} />
            <Animated.View style={[styles.FONT_ELARGE_animation_desc_container, { height: verticalScale(HEIGHT * 6 / 10), width: scale(WIDTH) }]}>
                <View style={{ marginVertical: DEFAUTL_SPACE }}>
                    <Text style={[styles.FONT_ELARGE, { fontSize: scale(FONT_LARGE), color: Colors.WHITE, marginTop: DEFAUTL_SPACE }]}>Okfind</Text>
                </View>
                <View style={{ height: moderateScale(280) }}>
                    <Carousel
                        layout={'default'}
                        data={Slides}
                        sliderWidth={600}
                        autoplay={true}
                        enableMomentum={false}
                        lockScrollWhileSnapping={true}
                        layoutCardOffset={2}
                        itemWidth={300}
                        autoplayInterval={3000}
                        loop={true}
                        renderItem={renderItem}
                        onSnapToItem={index => setActiveIndex(index)} />
                </View>
            </Animated.View>
            <View style={{ flexDirection: 'row' }}>
                <View style={[styles.buttom, { height: moderateScale(BUTTON_HEIGHT * 3), margin: moderateScale(10) }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: moderateScale(4 * DEFAUTL_SPACE) }}>
                        <View style={{ width: DEFAUTL_SPACE - 1, height: DEFAUTL_SPACE - 1, borderColor: Colors.WHITE, backgroundColor: activeIndex == 0 ? Colors.WHITE : Colors.PRIMARY, borderWidth: 2, borderStyle: 'solid', borderRadius: 20 }}>
                        </View>
                        <View style={{ width: DEFAUTL_SPACE - 1, height: DEFAUTL_SPACE - 1, borderColor: Colors.WHITE, backgroundColor: activeIndex == 1 ? Colors.WHITE : Colors.PRIMARY, borderWidth: 2, borderStyle: 'solid', borderRadius: 20, marginHorizontal: DEFAUTL_SPACE / 2 }}>
                        </View>
                        <View style={{ width: DEFAUTL_SPACE - 1, height: DEFAUTL_SPACE - 1, borderColor: Colors.WHITE, backgroundColor: activeIndex == 2 ? Colors.WHITE : Colors.PRIMARY, borderWidth: 2, borderStyle: 'solid', borderRadius: 20 }}>
                        </View>
                        <View style={{ width: DEFAUTL_SPACE - 1, height: DEFAUTL_SPACE - 1, borderColor: Colors.WHITE, backgroundColor: activeIndex == 3 ? Colors.WHITE : Colors.PRIMARY, borderWidth: 2, borderStyle: 'solid', borderRadius: 20, marginHorizontal: DEFAUTL_SPACE / 2 }}>
                        </View>
                    </View>
                    <Pressable style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.9 : 1 }], backgroundColor: pressed ? Colors.GREY.LIGHT : Colors.WHITE, borderRadius: BORDER_RADIUS_CIRCULAR, height: moderateScale(BUTTON_HEIGHT), marginBottom: moderateScale(DEFAUTL_SPACE) }, styles.button]} onPress={e => props.navigation.push('Auth')}>
                        <Text style={{ color: Colors.PRIMARY, fontFamily: 'Montserrat-Bold', fontSize: scale(FONT_SMALL) }}>Get Started</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.9 : 1 }], backgroundColor: pressed ? Colors.GREY.SIMPLE : Colors.PRIMARY, borderRadius: BORDER_RADIUS_CIRCULAR, borderColor: Colors.WHITE, borderWidth: 2, borderStyle: 'solid', height: verticalScale(BUTTON_HEIGHT) }, styles.button]}>
                        <Text style={{ color: Colors.WHITE, fontFamily: 'Montserrat-Bold', fontSize: scale(FONT_SMALL) }}>I Already have a Okfind account</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    FONT_ELARGE: {
        fontFamily: "Montserrat-Bold",
    },
    FONT_ELARGE_animation_desc_container: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    description: {
        fontFamily: "Montserrat-SemiBold",
    },
    buttom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {

    }
})

