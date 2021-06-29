import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
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
import EIcon from 'react-native-vector-icons/Entypo';
import { advertisments } from '../constants/categories';
import * as yup from 'yup';
const Categories = (props) => {
    const { WIDTH, HEIGHT, FONT_ELARGE, ICON_SIZE, INLINE_GAP, DEFAUTL_SPACE, BORDER_WIDTH_SMALL, BORDER_WIDTH, FONT_GLARGE, FONT_MID, BORDER_RADIUS_CIRCULAR } = Numericals();
    const HeaderTemplate = () => {
        return (
            <View style={[styles.header, { padding: DEFAUTL_SPACE, borderBottomWidth: BORDER_WIDTH }]}>
                <TouchableOpacity style={{ paddingRight: INLINE_GAP }} onPress={res => props.navigation.pop()}>
                    <AIcon name="close" size={ICON_SIZE} />
                </TouchableOpacity>
                <Text style={{ fontWeight: '900', fontSize: FONT_MID }}>What are you offering?</Text>
            </View>
        )
    }

    const onCategorySelected = (addType: string) => {
        advertisments.map(value => {
            if (value._type == addType)
                props.navigation.navigate('SelectedCategories', value);
        })
    }
    return (
        <>
            <StatusBarTemplate color={Colors.QUARTZ} />
            <HeaderTemplate />
            <View style={[styles.container, { backgroundColor: Colors.WHITE }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={[styles.box, { borderWidth: BORDER_WIDTH_SMALL, borderColor: Colors.HOME_BCK }]} onPress={res => {
                        onCategorySelected('cars')
                    }}>
                        <AIcon name="car" size={ICON_SIZE} />
                        <Text>Cars</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, { borderWidth: BORDER_WIDTH_SMALL, borderColor: Colors.HOME_BCK }]} onPress={res => {
                        onCategorySelected('properties')
                    }}>
                        <FAIcon name="building-o" size={ICON_SIZE} />
                        <Text>Properties</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={[styles.box, { borderWidth: BORDER_WIDTH_SMALL, borderColor: Colors.HOME_BCK }]} onPress={res => {
                        onCategorySelected('mobile')
                    }}>
                        <OCIcon name="device-mobile" size={ICON_SIZE} />
                        <Text>Mobile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, { borderWidth: BORDER_WIDTH_SMALL, borderColor: Colors.HOME_BCK }]} onPress={res => {
                        onCategorySelected('jobs')
                    }}>
                        <IOIcon name="briefcase-outline" size={ICON_SIZE} />
                        <Text>Jobs</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <TouchableOpacity style={[styles.box, { borderWidth: BORDER_WIDTH_SMALL, borderColor: Colors.HOME_BCK }]} onPress={res => {
                        onCategorySelected('bikes')
                    }}>
                        <MCIcon name="bike" size={ICON_SIZE} />
                        <Text>Bikes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, { borderWidth: BORDER_WIDTH_SMALL, borderColor: Colors.HOME_BCK }]} onPress={res => {
                        onCategorySelected('electronics')
                    }}>
                        <AIcon name="printer" size={ICON_SIZE} />
                        <Text>Electronics & Appliances</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={[styles.box, { borderWidth: BORDER_WIDTH_SMALL, borderColor: Colors.HOME_BCK }]} onPress={res => {
                        onCategorySelected('tution')
                    }}>
                        <EIcon name="book" size={ICON_SIZE} />
                        <Text>Tution</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box, { borderWidth: BORDER_WIDTH_SMALL, borderColor: Colors.HOME_BCK }]} onPress={res => {
                        console.log("more categories");

                    }}>
                        <FIcon name="nav-icon-grid" size={ICON_SIZE} />
                        <Text>More Categories</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    box: {
        flex: 1 / 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 55,
        backgroundColor: Colors.WHITE,
        borderBottomColor: Colors.HOME_BCK,
    }
})
