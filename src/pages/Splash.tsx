import React, { useRef, useEffect } from 'react'
import { Animated, Easing, View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import { color } from 'react-native-reanimated';
import { Colors } from '../constants/color';
import { Numericals } from '../constants/numerical';
import StatusBar from '../styles/statusBar';
import FIcon from 'react-native-vector-icons/Feather'
export default function Splash(props: { navigation: { push: Function } }) {
    const { FONT_ELARGE, WIDTH, ICON_SIZE } = Numericals();

    setTimeout(() => {
        props.navigation.push('Dashboard')
    }, 2000);

    return (
        <View style={[styles.container]}>
            <StatusBar color={Colors.PRIMARY} />
            <Text style={[styles.Text_style, { fontSize: FONT_ELARGE }]}>First</Text>
            <FIcon name="search" color={Colors.WHITE} size={ICON_SIZE} />
            <Text style={[styles.Text_style, { fontSize: FONT_ELARGE }]}>inder</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY
    },
    Text_style: {
        fontFamily: "Montserrat-Bold",
        color: Colors.WHITE,
    }
})