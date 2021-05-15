import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import EIcon from 'react-native-vector-icons/EvilIcons'
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
export default function ProductCard() {
    const { WIDTH, HEIGHT, FONT_ELARGE, ICON_SIZE, DEFAUTL_SPACE, FONT_GLARGE, FONT_SMALL, FONT_LARGE, FONT_MID, BORDER_RADIUS_CIRCULAR } = Numericals();

    return (
        <View style={[styles.conatainer, { marginVertical: DEFAUTL_SPACE / 2 }]}>
            <View style={[{ width: 200 }, styles.shadow]}>
                <View style={{ flex: 1, padding: 5 }}>
                    <Image source={require('../assets/images/tolets.jpg')} resizeMode='stretch' style={{ width: 190, height: 150 }} />
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: DEFAUTL_SPACE }}>
                    <Text style={{ fontWeight: 'bold', fontSize: FONT_LARGE }}>{`\u20B9`}1000</Text>
                    <Text style={{ marginTop: DEFAUTL_SPACE / 2 }}>DELHI,CHUNAR ROAD</Text>
                    <Text style={{ marginTop: DEFAUTL_SPACE / 2 }}>2-BEDS</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: DEFAUTL_SPACE / 2 }}>
                        <EIcon name="location" size={ICON_SIZE} />
                        <Text style={{ color: Colors.GREY.SIMPLE, fontSize: FONT_SMALL }}>KRISHNA NAGAR,SOCITY</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.shadow, { width: 200 }]}>
                <View style={{ flex: 1, padding: 5 }}>
                    <Image source={require('../assets/images/tolets.jpg')} resizeMode='stretch' style={{ width: 190, height: 150, padding: 4 }} />
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: DEFAUTL_SPACE }}>
                    <Text style={{ fontWeight: 'bold', fontSize: FONT_LARGE }}>{`\u20B9`}1000</Text>
                    <Text style={{ marginTop: DEFAUTL_SPACE / 2 }}>DELHI,CHUNAR ROAD</Text>
                    <Text style={{ marginTop: DEFAUTL_SPACE / 2 }}>2-BEDS</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: DEFAUTL_SPACE / 2 }}>
                        <EIcon name="location" size={ICON_SIZE} />
                        <Text style={{ color: Colors.GREY.SIMPLE, fontSize: FONT_SMALL }}>KRISHNA NAGAR,SOCITY</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',


    },
    shadow: {
        shadowColor: Colors.GREY.SIMPLE,
        shadowOpacity: 0.6,
        shadowRadius: 3.5,
        elevation: 1,
    }
})
