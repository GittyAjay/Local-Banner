import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Button, Pressable, ScrollView, Platform, StatusBar } from 'react-native'
import { Colors } from '../constants/color';
import { Numericals } from '../constants/numerical';
import StatusBarTemplate from '../styles/statusBar';
import AIcon from 'react-native-vector-icons/AntDesign';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import FIcon from 'react-native-vector-icons/Fontisto';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import CountryCode from '../components/CountryCode';
export default function Auth() {
    const { WIDTH, ICON_SIZE, DEFAUTL_SPACE, FONT_ELARGE, FONT_SMALL, FONT_MID, BORDER_WIDTH, BORDER_RADIUS } = Numericals();
    const [username, setUserName] = useState('');
    const [placeholder, setPlaceholder] = useState('Phone number');
    const [sizeChanger, setsizeChanger] = useState(0);
    const [maxPhoneNumber, setMaxPhoneNumber] = useState(10);
    const [countryCode, setCountryCode] = useState(0);

    return (
        <>
            <ScrollView style={{ backgroundColor: Colors.WHITE }}>
                <View style={[styles.container, { backgroundColor: Colors.WHITE, paddingHorizontal: 2 * DEFAUTL_SPACE }]}>
                    <StatusBarTemplate color={Colors.WHITE} />

                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                        <View style={styles.closeButton}>
                            <TouchableOpacity>
                                <AIcon name="close" color={Colors.BLACK} size={ICON_SIZE} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.heading}>
                            <Text style={[styles.heading_txt, { fontSize: FONT_ELARGE }]}>Log in or sign up to Fru</Text>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={[styles.topCorner_input_box, {
                                borderColor: Colors.GREY,
                                paddingLeft: DEFAUTL_SPACE,
                                paddingBottom: DEFAUTL_SPACE / 2,
                                paddingTop: DEFAUTL_SPACE / 2,
                                borderWidth: BORDER_WIDTH,
                                borderTopLeftRadius: BORDER_RADIUS,
                                borderTopEndRadius: BORDER_RADIUS,
                                marginBottom: sizeChanger * -6
                            }]}>
                                <View>
                                    <Text style={{ color: Colors.GREY, fontSize: FONT_SMALL, fontFamily: 'Comfortaa-Bold' }}>Country/Region</Text>
                                    <View style={{ flexDirection: 'row', paddingBottom: DEFAUTL_SPACE }}>
                                        <Text style={{ color: Colors.BLACK, fontSize: FONT_MID, fontFamily: 'Comfortaa-Bold' }}>India</Text>
                                        <Text style={{ color: Colors.BLACK, fontSize: FONT_MID, fontFamily: 'Comfortaa-Bold' }}>( +91 )</Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.3 : 1 }]} onPress={e => setCountryCode(1)}>
                                        <AIcon name="down" size={ICON_SIZE} color={Colors.BLACK} style={{ padding: 10 }} />
                                    </Pressable>
                                </View>
                            </View>
                            <View style={[styles.buttomCorner_input_box, {
                                borderColor: username.length < 10 && username.length > 0 ? Colors.RED : Colors.GREY,
                                paddingLeft: DEFAUTL_SPACE,
                                borderWidth: BORDER_WIDTH,
                                borderTopLeftRadius: sizeChanger * BORDER_RADIUS,
                                borderTopEndRadius: sizeChanger * BORDER_RADIUS,
                                borderBottomLeftRadius: BORDER_RADIUS,
                                borderBottomEndRadius: BORDER_RADIUS,
                            }]}>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
                                    <Text style={{ fontSize: sizeChanger * 12, color: Colors.BLACK, paddingTop: sizeChanger * 10, paddingRight: sizeChanger * 5 }}>Phone number</Text>
                                    <TextInput
                                        onFocus={e => { setsizeChanger(1); setPlaceholder(''); }}
                                        onBlur={e => { setsizeChanger(0); setPlaceholder('Phone number'); }}
                                        onChangeText={user => { setUserName(user); }}
                                        defaultValue={username}
                                        maxLength={maxPhoneNumber}
                                        style={{ fontSize: FONT_MID, fontFamily: 'Comfortaa-Bold' }}
                                        placeholder={placeholder}
                                        keyboardType="phone-pad" />
                                </View>
                                <View style={{ padding: DEFAUTL_SPACE }}>
                                    <AIcon name="check" color={username.length < 10 ? Colors.WHITE : Colors.BLACK} size={ICON_SIZE} />
                                </View>
                            </View>
                            <View>
                                <Text style={{ marginTop: DEFAUTL_SPACE }}>We'ill call you or text you to confirm your number.Standard message and data rates apply</Text>
                            </View>
                        </View>
                        <View style={styles.button_container}>
                            <Pressable style={({ pressed }) => [
                                { transform: [{ scale: pressed ? 0.94 : 1 },], borderRadius: BORDER_RADIUS, padding: DEFAUTL_SPACE, backgroundColor: username.length < 10 ? Colors.GREY : Colors.RED }, styles.button
                            ]}>
                                <Text style={{ color: Colors.WHITE, fontFamily: 'Comfortaa-Bold', fontSize: FONT_MID }}>Continue</Text>
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ borderBottomWidth: 0.5, borderBottomColor: Colors.GREY, flex: 1 }} ></View>
                            <Text style={{ color: Colors.GREY, marginHorizontal: 5 }}>or</Text>
                            <View style={{ borderBottomWidth: 0.5, borderBottomColor: Colors.GREY, flex: 1 }} ></View>
                        </View>
                    </View>
                    <View style={[styles.social_buttons]}>
                        <View style={styles.button_container}>
                            <Pressable style={({ pressed }) => [
                                { transform: [{ scale: pressed ? 0.94 : 1 },], backgroundColor: pressed ? Colors.IVORY : Colors.WHITE, borderRadius: BORDER_RADIUS, padding: DEFAUTL_SPACE, }, styles.border_button
                            ]}>
                                <FIcon name="email" color="black" size={ICON_SIZE} style={{ flexGrow: 1 }} />
                                <Text style={{ color: Colors.BLACK, fontFamily: 'Comfortaa-Bold', fontSize: FONT_MID, flexGrow: 1.5 }}>Continue with Email</Text>
                            </Pressable>
                        </View>
                        <View style={styles.button_container}>
                            <Pressable style={({ pressed }) => [
                                { transform: [{ scale: pressed ? 0.94 : 1 },], backgroundColor: pressed ? Colors.IVORY : Colors.WHITE, borderRadius: BORDER_RADIUS, padding: DEFAUTL_SPACE, }, styles.border_button
                            ]}>
                                <MIcon name="facebook" color="blue" size={ICON_SIZE} style={{ flexGrow: 1 }} />
                                <Text style={{ color: Colors.BLACK, fontFamily: 'Comfortaa-Bold', fontSize: FONT_MID, flexGrow: 1.5 }}>Continue with Facebook</Text>
                            </Pressable>
                        </View>
                        <View style={styles.button_container}>
                            <Pressable style={({ pressed }) => [
                                { transform: [{ scale: pressed ? 0.94 : 1 },], backgroundColor: pressed ? Colors.IVORY : Colors.WHITE, borderRadius: BORDER_RADIUS, padding: DEFAUTL_SPACE, }, styles.border_button
                            ]}>
                                <FAIcon name="google" color="orange" size={ICON_SIZE} style={{ flexGrow: 1 }} />
                                <Text style={{ color: Colors.BLACK, fontFamily: 'Comfortaa-Bold', fontSize: FONT_MID, flexGrow: 1.5 }}>Continue with Facebook</Text>
                            </Pressable>
                        </View>
                        <View style={styles.button_container}>
                            <Pressable style={({ pressed }) => [
                                { transform: [{ scale: pressed ? 0.94 : 1 },], backgroundColor: pressed ? Colors.IVORY : Colors.WHITE, borderRadius: BORDER_RADIUS, padding: DEFAUTL_SPACE, }, styles.border_button
                            ]}>
                                <FAIcon name="apple" color="black" size={ICON_SIZE} style={{ flexGrow: 1 }} />
                                <Text style={{ color: Colors.BLACK, fontFamily: 'Comfortaa-Bold', fontSize: FONT_MID, flexGrow: 1.5 }}>Continue with Apple</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    scroll_container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    closeButton: {
        alignSelf: 'flex-start',
    },
    heading: {
        alignSelf: 'flex-start',
        marginVertical: 10
    },
    heading_txt: {
        fontFamily: 'Comfortaa-Bold',
    },
    topCorner_input_box: {
        borderStyle: 'solid',
        borderBottomColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttomCorner_input_box: {
        borderStyle: 'solid',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    social_buttons: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    border_button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 0.5,
    }
})