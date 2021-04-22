import React, { useRef, useEffect } from 'react'
import { Animated, Easing, View, Text, Image, StyleSheet, Button } from 'react-native'
import { color } from 'react-native-reanimated';
import { Colors } from '../constants/color';
import { Numericals } from '../constants/numerical';
import StatusBar from '../styles/statusBar';

export default function Splash(props: { navigation: { push: Function } }) {
    const { FONT_GLARGE } = Numericals();
    const anim = useRef(new Animated.Value(0)).current;
    console.log(typeof (props));

    const interpolatedBackRotate = anim.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg'],
    });

    useEffect(() => {
        Animated.timing(anim, {
            toValue: 30,
            easing: Easing.bounce,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }, [])

    setTimeout(() => {
        props.navigation.push('Dashboard');
    }, 1200);
    //style={[{ transform: [{ rotateZ: interpolatedBackRotate }] }]}
    return (
        <View style={[styles.container, { backgroundColor: Colors.SECONDARY }]}>
            <StatusBar color={Colors.BLACK} />
            <Animated.View style={[styles.animation]}>
                <Text style={[styles.Text_style, { fontSize: FONT_GLARGE, color: Colors.WHITE },]}>Ok</Text>
                <Animated.View >
                    <Text style={[styles.Text_style, { fontSize: FONT_GLARGE, color: Colors.WHITE }]}>find</Text>
                </Animated.View>
            </Animated.View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text_style: {
        fontFamily: "Montserrat-Bold",
    }
})