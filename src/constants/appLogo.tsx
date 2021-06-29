import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../constants/color';
import { Numericals } from '../constants/numerical';
export const Logo = () => {
    const { FONT_ELARGE, WIDTH, ICON_SIZE, FONT_GLARGE } = Numericals();
    return (
        <View style={[styles.container]}>
            <Text style={[styles.Text_style, { fontSize: FONT_GLARGE }]}>Stu</Text>
            <MIcon name="duck" color={Colors.WHITE} size={ICON_SIZE + 10} />
            <Text style={[styles.Text_style, { fontSize: FONT_GLARGE }]}>ment</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
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