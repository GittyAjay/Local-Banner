import React, { useRef, useEffect } from 'react'
import { Animated, Easing, View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import { color } from 'react-native-reanimated';
import { Colors } from '../constants/color';
import { Numericals } from '../constants/numerical';
import StatusBar from '../styles/statusBar';
import FIcon from 'react-native-vector-icons/Feather'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Logo } from '../constants/appLogo';
export default function Splash(props: { navigation: { push: Function } }) {
    setTimeout(() => {
        props.navigation.push('Dashboard')
    }, 2000);
    return (
        <View style={styles.container}>
            <Logo />
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
})
