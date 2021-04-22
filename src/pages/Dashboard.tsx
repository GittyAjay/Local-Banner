import Animated from 'react-native-reanimated';
import { Colors } from '../constants/color'
import React from 'react';
import StatusBar from '../styles/statusBar'
import LottieView from 'lottie-react-native'
import { Numericals } from '../constants/numerical';
import MIcon from 'react-native-vector-icons/AntDesign';
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function Dashboard(props: { navigation: { push: Function } }) {

    const { ANIM_WIDTH, ANIM_HEIGHT, BUTTON_HEIGHT, DEFAUTL_SPACE, FONT_MID, FONT_LARGE, FONT_FLARGE, FONT_GLARGE, FONT_SMALL, HEIGHT, INLINE_GAP, WIDTH, ICON_SIZE, BORDER_RADIUS_CIRCULAR } = Numericals();

    return (
        <View style={[styles.container, { backgroundColor: Colors.PRIMARY }]}>
            <StatusBar color={Colors.PRIMARY} />
            <Animated.View style={[styles.logo_animation_desc_container, { height: HEIGHT * 6 / 10, width: WIDTH }]}>
                <Text style={[styles.logo, { fontSize: FONT_GLARGE, color: Colors.WHITE }]}>Okfind</Text>
                <Text style={[styles.description, { fontSize: FONT_LARGE, color: Colors.WHITE }]}>Search Your Feed</Text>
                <Text style={[styles.description, { fontSize: FONT_SMALL, color: Colors.WHITE }]}>We Find For You</Text>
                <LottieView
                    style={[{
                        width: ANIM_WIDTH,
                        height: ANIM_HEIGHT
                    }]}
                    source={require('../assets/images/welcome.json')}
                    autoPlay
                    loop
                />

            </Animated.View>
            <View style={{ flexDirection: 'row' }}>
                <View style={[styles.buttom, { height: BUTTON_HEIGHT * 3, marginBottom: DEFAUTL_SPACE * 2 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: DEFAUTL_SPACE }}>
                        <Text style={[styles.button_text, { color: Colors.WHITE }]}>0</Text>
                        <Text style={[styles.button_text, { color: Colors.GREY.SIMPLE }]}>0</Text>
                        <Text style={[styles.button_text, { color: Colors.GREY.SIMPLE }]}>0</Text>
                    </View>
                    <Pressable style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.9 : 1 }], backgroundColor: pressed ? Colors.GREY.LIGHT : Colors.WHITE, borderRadius: BORDER_RADIUS_CIRCULAR, height: BUTTON_HEIGHT }, styles.button]} onPress={e => props.navigation.push('Auth')}>
                        <Text style={{ color: Colors.PRIMARY, fontFamily: 'Montserrat-Bold', fontSize: FONT_MID }}>Get Started</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.9 : 1 }], backgroundColor: pressed ? Colors.GREY.SIMPLE : Colors.PRIMARY, borderRadius: BORDER_RADIUS_CIRCULAR, borderColor: Colors.WHITE, borderWidth: 2, borderStyle: 'solid', height: BUTTON_HEIGHT }, styles.button]}>
                        <Text style={{ color: Colors.WHITE, fontFamily: 'Montserrat-Bold', fontSize: FONT_MID }}>I Already have a Okfind account</Text>
                    </Pressable>
                </View>
            </View>

        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontFamily: "Montserrat-Bold",
        marginTop: 20
    },
    logo_animation_desc_container: {
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
        margin: 10
    },

    button_text: {

    }

})

