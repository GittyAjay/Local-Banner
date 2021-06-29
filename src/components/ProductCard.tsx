import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import EIcon from 'react-native-vector-icons/EvilIcons'
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import { useNavigation } from '@react-navigation/native';
export default function ProductCard({ ads }) {
    const { WIDTH, HEIGHT, FONT_ELARGE, ICON_SIZE, FONT_XSMALL, DEFAUTL_SPACE, INLINE_GAP, FONT_GLARGE, FONT_SMALL, FONT_LARGE, FONT_MID, BORDER_RADIUS_CIRCULAR } = Numericals();
    const navigation = useNavigation();
    return (
        <Pressable onPress={res => navigation.navigate('ShowAds', ads)} style={({ pressed }) => [{ flexDirection: 'column', alignItems: 'stretch', width: WIDTH / 2 - INLINE_GAP, marginRight: DEFAUTL_SPACE, marginBottom: DEFAUTL_SPACE, opacity: pressed ? 0.3 : 1 }, styles.shadow]}>
            <View style={{ flex: 1, padding: 5, overflow: 'hidden' }}>
                <Image source={{ uri: ads.url[0].url }} resizeMode='stretch' style={{ width: 190, height: 150 }} />
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: DEFAUTL_SPACE }}>
                <Text style={{ fontWeight: 'bold', fontSize: FONT_LARGE }}>{`\u20B9`} {ads.Price}</Text>
                <Text style={{ marginTop: DEFAUTL_SPACE / 2 }}>{ads.Title}</Text>
                <Text style={{ marginTop: DEFAUTL_SPACE / 2 }}>{ads.Description}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: DEFAUTL_SPACE / 2 }}>
                    <EIcon name="location" size={ICON_SIZE} />
                    <Text style={{ color: Colors.GREY.SIMPLE, fontSize: FONT_XSMALL }}>{ads.Location}</Text>
                </View>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    shadow: {
        borderWidth: 0.5,
        borderColor: Colors.GREY.SIMPLE,
    }
})
