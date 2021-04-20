import React, { useRef, useEffect } from 'react'
import { Animated, Easing, View, Text, Image, StyleSheet, Button } from 'react-native'
import { Colors } from '../constants/color';
import { Numericals } from '../constants/numerical';
import StatusBar from '../styles/statusBar';

export default function Splash(props: { navigation: { push: Function } }) {
    const anim = useRef(new Animated.Value(0)).current;
    console.log(typeof (props));

    const interpolatedBackRotate = anim.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg'],
    });

    useEffect(() => {
        Animated.timing(anim, {
            toValue: 5,
            easing: Easing.ease,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }, [])

    setTimeout(() => {
        props.navigation.push('Dashboard');
    }, 1200);

    return (
        <View style={[styles.container, { backgroundColor: `${Colors.BLACK}` }]}>
            <StatusBar color={Colors.BLACK} />
            <Animated.View style={[styles.animation]}>
                <Text style={[styles.Text_style, { fontSize: 60, color: Colors.WHITE },]}>F</Text>
                <Animated.View style={[{ transform: [{ rotateZ: interpolatedBackRotate }] }]}>
                    <Text style={[styles.Text_style, { fontSize: 60, color: Colors.WHITE }]}>R</Text>
                </Animated.View>
                <Text style={[styles.Text_style, { fontSize: 60, color: Colors.WHITE }]}>U</Text>
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
        fontFamily: "BodoniModa-ExtraBold",
    }
})