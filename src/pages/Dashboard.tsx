import Animated from 'react-native-reanimated';
import { Colors } from '../constants/color'
import React from 'react';
import StatusBar from '../styles/statusBar'
import LottieView from 'lottie-react-native'
import { Numericals } from '../constants/numerical';
import MIcon from 'react-native-vector-icons/AntDesign';
import { Image, View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Dashboard() {

    const { ANIM_WIDTH, ANIM_HEIGHT, BUTTON_HEIGHT, DEFAUTL_SPACE, FONT_MID, FONT_LARGE, HEIGHT, INLINE_GAP, WIDTH, ICON_SIZE } = Numericals();

    return (
        <View style={[styles.container, { backgroundColor: `${Colors.BLUE.SIMPLE}` }]}>
            <StatusBar color={`${Colors.BLUE.SIMPLE}`} />
            <Animated.View style={[styles.logo_animation_desc_container, { height: HEIGHT * 2 / 3, width: WIDTH }]}>
                <Image source={require('../assets/images/logo.png')} />
                <LottieView
                    style={[styles.animation, {
                        width: ANIM_WIDTH,
                        height: ANIM_HEIGHT
                    }]}
                    source={require('../assets/images/animation2.json')}
                    autoPlay
                    loop
                />
                <Text style={[styles.description, { fontSize: FONT_LARGE }]}>We Find For You</Text>
            </Animated.View>
            <View >
                <TouchableOpacity
                    style={[styles.button, {
                        width: WIDTH - INLINE_GAP, height: BUTTON_HEIGHT, padding: DEFAUTL_SPACE,
                        marginBottom: DEFAUTL_SPACE,
                    }]}
                    onPress={() => console.log("click me")}
                >
                    <View style={[styles.inner_button, { flexGrow: 1.1 }]}>
                        <Text style={[styles.button_txt, { fontSize: FONT_MID, }]}>Get Started</Text>
                    </View>
                    <View style={[styles.inner_button, { flex: 1, paddingRight: DEFAUTL_SPACE }]}>
                        <MIcon name="arrowright" size={ICON_SIZE} color={`${Colors.WHITE}`} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo_animation_desc_container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {

    },
    description: {
        fontFamily: "JosefinSans-SemiBold",
    },
    button: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "black",
    },
    button_txt: {
        color: 'white',
        fontWeight: 'bold',
    },
    inner_button: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
})

