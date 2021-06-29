import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AIcon from 'react-native-vector-icons/AntDesign';
import { Colors } from '../constants/color';
import { Numericals } from '../constants/numerical';
const Header = ({ template }) => {
    const { WIDTH, HEIGHT, FONT_ELARGE, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, BORDER_WIDTH, FONT_GLARGE, FONT_MID, BORDER_RADIUS_CIRCULAR } = Numericals();
    return (
        <View>
            {template}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 55,
        backgroundColor: Colors.WHITE,
        borderBottomColor: Colors.HOME_BCK,
    }
})
