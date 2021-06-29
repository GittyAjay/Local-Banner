import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
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
import Header from '../components/Header';
import * as yup from 'yup';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Carousel from 'react-native-snap-carousel';
import Spinner from 'react-native-loading-spinner-overlay';

const Categories = (props) => {
    const { WIDTH, HEIGHT, FONT_ELARGE, BORDER_RADIUS, ICON_SIZE, INLINE_GAP, BUTTON_PADDING, DEFAUTL_SPACE, BORDER_WIDTH_SMALL, BORDER_WIDTH, FONT_GLARGE, FONT_MID, BORDER_RADIUS_CIRCULAR } = Numericals();
    const [resourcePath, setResourcePath] = useState<string>();
    const [fileName, setFileName] = useState<any>();
    const [downloadURI, setDownloadURI] = useState<any>();
    const [isLoading, setLoading] = useState({ isLoading: false, status: '' });
    const [lodingStart, setLodingStart] = useState(false);
    const currentUser = auth().currentUser?.uid;
    const HeaderTemplate = () => {
        return (
            <View style={[styles.header, { padding: DEFAUTL_SPACE, borderBottomWidth: BORDER_WIDTH }]}>
                <TouchableOpacity style={{ paddingRight: INLINE_GAP }} onPress={res => props.navigation.pop()}>
                    <AIcon name="arrowleft" size={ICON_SIZE} />
                </TouchableOpacity>
                <Text style={{ fontWeight: '900', fontSize: FONT_MID }}>Upload your photos</Text>
            </View>
        )
    }
    const [carouselItems, setCarouselItems] = useState<any>([

    ])

    const [options, setOptions] = useState({
        title: 'Select Image',
        customButtons: [
            {
                name: 'customOptionKey',
                title: 'Choose file from Custom Option'
            },
        ],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    });


    const cameraOrGallery = (cameraOrGallery: string) => {
        if (cameraOrGallery == 'camera')
            launchCamera(options, (res) => {
                res.assets.map(val => {
                    console.log(val);
                    const { uri, fileName } = val;
                    console.log(uri);
                    setResourcePath(uri);
                    setFileName(fileName);
                    let FileName = getFileName(fileName, uri);
                    uploadImageToStorage(uri, FileName);
                })
                console.log(resourcePath, carouselItems);
            })
        else
            launchImageLibrary(options, res => {
                console.log(res);
                // setResourcePath(res.assets[0].uri)
                const { uri, fileName } = res.assets[0];
                console.log(uri);
                setResourcePath(uri);
                setFileName(fileName);
                let FileName = getFileName(fileName, uri);
                uploadImageToStorage(uri, FileName);
            })
    }
    const getFileName = (name, path) => {
        if (name != null) { return name; }
        return path.split("/").pop();
    }
    const uploadImageToStorage = (path, name) => {
        setLoading({ isLoading: true, status: '' });
        let reference = storage().ref(name);
        let task = reference.putFile(path);
        task.then((res) => {
            getDownloadURL(name);
            console.log('Image uploaded to the bucket!');
            setLoading({ isLoading: false, status: 'Image uploaded successfully' });

        }).catch((e) => {
            const status = 'Something went wrong';
            console.log('uploading image error => ', e);
            setLoading({ isLoading: false, status: status });
        });
    }
    async function getDownloadURL(name) {
        await storage().ref(name).getDownloadURL().then(res => {
            setCarouselItems(prev => [...prev, { url: res }])
            console.log(res);
        });
    }
    async function saveToFirebase() {
        console.log("save to firebase");
        console.log(currentUser);
        await firestore()
            .collection('Advertisments')
            .add({ ...props.route.params, url: carouselItems })
            .then((res) => {
                console.log('image uploaded!');
                props.navigation.navigate('FinalPage', { id: res.id });
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <>

            <Spinner
                visible={isLoading.isLoading}
                textContent={'saving...'}
                textStyle={styles.spinnerTextStyle}
            />
            <StatusBarTemplate color={Colors.QUARTZ} />
            <HeaderTemplate />
            <View style={[styles.container, { backgroundColor: Colors.WHITE }]}>
                <View style={styles.element}>
                    {!resourcePath && <EIcon name="image" size={3 * ICON_SIZE} color={Colors.GREY.LIGHT} />}
                    {resourcePath && <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center' }}>
                            {carouselItems.map((values, key) =>
                                <Image key={key} source={{ uri: values.url }} style={{ width: 300 - INLINE_GAP, height: 300, margin: DEFAUTL_SPACE }} />
                            )
                            }
                        </View>
                    </ScrollView>}
                    <Text style={{ color: Colors.GREY.LIGHT }}>{resourcePath ? 'images' : 'Upload Images'}</Text>
                </View>
                <View style={styles.element}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'stretch' }}>
                        <TouchableOpacity style={[styles.square, { marginRight: INLINE_GAP }]} onPress={res => cameraOrGallery('camera')}>
                            <AIcon name="camerao" color={Colors.WHITE} size={2 * ICON_SIZE} />
                            <Text style={{ color: Colors.WHITE }}>Take a picture</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.square} onPress={res => cameraOrGallery('gallery')}>
                            <AIcon name="folder1" color={Colors.WHITE} size={2 * ICON_SIZE} />
                            <Text style={{ color: Colors.WHITE }}>Folder</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: Colors.WHITE, justifyContent: 'center', alignItems: 'stretch', paddingHorizontal: DEFAUTL_SPACE, paddingVertical: DEFAUTL_SPACE }}>
                <TouchableOpacity onPress={res => saveToFirebase()} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.BLACK, paddingVertical: BUTTON_PADDING, borderRadius: BORDER_RADIUS }} >
                    <Text style={{ color: Colors.WHITE, fontSize: FONT_MID, fontWeight: '900' }}>Next</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    element: {
        flex: 0.49,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    square: {
        flex: 0.3,
        height: 100,
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 55,
        backgroundColor: Colors.WHITE,
        borderBottomColor: Colors.HOME_BCK,
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
})
