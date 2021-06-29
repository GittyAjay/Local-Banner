import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Alert } from 'react-native'
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import StatusBarTemplate from '../styles/statusBar';
import AIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import OCIcon from 'react-native-vector-icons/Octicons';
import IOIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/Fontisto';
import Header from '../components/Header';
import firestore from '@react-native-firebase/firestore';
import { Formik } from 'formik';
import { ScrollView } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

const SelectedCategories = (props) => {
    const { WIDTH, HEIGHT, FONT_ELARGE, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, BORDER_WIDTH_SMALL, BORDER_WIDTH, FONT_GLARGE, BORDER_RADIUS, FONT_MID, BORDER_RADIUS_CIRCULAR, BUTTON_PADDING } = Numericals();
    const [record, setRecords] = useState(props.route.params);

    const HeaderTemplate = () => {
        return (
            <View style={[styles.header, { padding: DEFAUTL_SPACE, borderBottomWidth: BORDER_WIDTH }]}>
                <TouchableOpacity style={{ paddingRight: INLINE_GAP }} onPress={res => props.navigation.pop()}>
                    <AIcon name="arrowleft" size={ICON_SIZE} />
                </TouchableOpacity>
                <Text style={{ fontWeight: '900', fontSize: FONT_MID }}>Include some details</Text>
            </View>
        )
    }
    const currentUser = auth().currentUser?.uid;

    return (
        <>
            <StatusBarTemplate color={Colors.QUARTZ} />
            <HeaderTemplate />
            <Formik
                initialValues={record}
                onSubmit={values => {
                    // firestore()
                    //     .collection('Advertisments')
                    //     .add({ ...values, uid: currentUser })
                    //     .then((res) => {
                    //         setLodingStart(false);
                    //         console.log(res.id);
                    //         Alert.alert('Advertisments added!');
                    //         props.navigation.navigate('ProductImg', { id: res.id });
                    //     });
                    props.navigation.navigate('ProductImg', values);
                }}
            >
                {(props) => (
                    <View style={[styles.container]}>
                        <ScrollView>
                            <View style={{ flexDirection: 'column', paddingHorizontal: DEFAUTL_SPACE, paddingVertical: DEFAUTL_SPACE }}>
                                {props.values.p1 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p1}`)}
                                    placeholder={props.values.p1}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p1}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p2 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p2}`)}
                                    placeholder={`${props.values.p2}`}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p2}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p3 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p3}`)}
                                    placeholder={`${props.values.p3}`}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p3}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p4 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p4}`)}
                                    placeholder={`${props.values.p4}`}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p4}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p5 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p5}`)}
                                    placeholder={`${props.values.p5}`}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p5}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p6 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p6}`)}
                                    placeholder={props.values.p6}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p6}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p7 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p7}`)}
                                    placeholder={props.values.p7}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p7}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p8 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p8}`)}
                                    placeholder={props.values.p8}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p8}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p9 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p9}`)}
                                    placeholder={props.values.p9}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p9}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p10 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p10}`)}
                                    placeholder={props.values.p10}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p10}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p11 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p11}`)}
                                    placeholder={props.values.p11}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p11}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p12 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p12}`)}
                                    placeholder={props.values.p12}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p12}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                                {props.values.p13 && <TextInput
                                    onChangeText={props.handleChange(`${props.values.p13}`)}
                                    placeholder={props.values.p13}
                                    placeholderTextColor={Colors.GREY.LIGHT}
                                    onBlur={props.handleBlur(`${props.values.p13}`)}
                                    style={{ color: Colors.BLACK, borderBottomWidth: BORDER_WIDTH, borderBottomColor: Colors.BLACK }}
                                />}
                            </View>
                        </ScrollView>
                        <View style={{ backgroundColor: Colors.WHITE, justifyContent: 'center', alignItems: 'stretch', paddingHorizontal: DEFAUTL_SPACE, paddingVertical: DEFAUTL_SPACE }}>
                            <TouchableOpacity onPress={props.handleSubmit} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.BLACK, paddingVertical: BUTTON_PADDING, borderRadius: BORDER_RADIUS }}>
                                <Text style={{ color: Colors.WHITE, fontSize: FONT_MID, fontWeight: '900' }}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                )
                }
            </Formik>

        </>
    )
}

export default SelectedCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 55,
        backgroundColor: Colors.WHITE,
        borderBottomColor: Colors.HOME_BCK,
    },
    form: {

    },
})
