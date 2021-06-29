import React, { useEffect } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Splash from '../pages/Splash';
import AuthDashboard from '../pages/Auth';
import Otp from '../pages/Otp';
import Categories from '../pages/Categories';
import SelectedCategories from '../pages/SelectedCategories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import wishList from '../pages/wishList';
import AIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';
import EIcon from 'react-native-vector-icons/Entypo';
import FIcon from 'react-native-vector-icons/Feather';
import { Numericals } from '../constants/numerical';
import { Colors } from '../constants/color';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import ProductImg from '../pages/ProductImage';
import FinalPage from '../pages/FinalPage';
import ShowAds from '../pages/ShowAds';
import AddsByCategories from '../pages/AddsByCategories';
import { Pressable, StyleSheet, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector, connect } from 'react-redux'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
const { Navigator, Screen } = createStackNavigator();

function HomeNav(props: { navigation: any, route: any }) {
    const { ICON_SIZE, FONT_SMALL, WIDTH, BORDER_RADIUS_CIRCULAR } = Numericals();

    const CustomTab = ({ children, onPress }) => {
        return (
            <Pressable style={({ pressed }) => [{ top: 5, justifycontent: 'center', alignItem: 'center', transform: [{ scale: pressed ? 1.07 : 1 }] }, styles.shadow]} onPress={onPress} >
                <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: Colors.QUARTZ }}>
                    {children}
                </View>
            </Pressable >
        )
    }

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            lazy={true}

            tabBarOptions={{
                labelStyle: {
                    fontSize: FONT_SMALL,
                },
                activeTintColor: Colors.QUARTZ,
                inactiveTintColor: Colors.QUARTZ,

                showLabel: false,
                style: [{
                    height: 60,
                    backgroundColor: Colors.WHITE,
                    position: 'absolute',
                    margin: 10,
                    borderRadius: 40,

                }, styles.shadow]
            }}


        >
            <Tab.Screen name="Home" component={Home}

                options={{
                    tabBarLabel: 'HOME',
                    tabBarIcon: ({ focused }) => (
                        !focused ? <AIcon name="home" color={Colors.QUARTZ} size={ICON_SIZE} style={{ opacity: focused ? 1 : 0.8 }} />
                            : <EIcon name="home" color={Colors.QUARTZ} size={ICON_SIZE} />
                    ),

                }}

            />
            <Tab.Screen name="CHAT" component={wishList}

                options={{
                    tabBarLabel: 'CHAT',

                    tabBarIcon: ({ focused }) => (
                        !focused ? <IIcon name="chatbubble-ellipses-outline" color={Colors.QUARTZ} size={ICON_SIZE} style={{ opacity: focused ? 1 : 0.8 }} />
                            : <IIcon name="chatbubble-ellipses-sharp" color={Colors.QUARTZ} size={ICON_SIZE} />
                    ),


                }}
            />
            <Tab.Screen name="SELL" component={Categories}

                options={{
                    tabBarLabel: 'SELL',
                    tabBarIcon: ({ focused }) => (<AIcon name="plus" color={focused ? Colors.WHITE : Colors.GREY.LIGHT} size={ICON_SIZE} />),
                    tabBarButton: (props) => <CustomTab  {...props} />,
                }}
            />
            <Tab.Screen name="MY ADDS" component={Profile}
                options={{
                    tabBarLabel: 'MY ADDS',
                    tabBarIcon: ({ focused }) => (
                        !focused ? <AIcon name="hearto" color={Colors.QUARTZ} size={ICON_SIZE} style={{ opacity: focused ? 1 : 0.8 }} />
                            : <AIcon name="heart" color={Colors.QUARTZ} size={ICON_SIZE} />
                    ),
                }}
            />
            <Tab.Screen name="ACCOUNT" component={Profile}
                options={{
                    tabBarLabel: 'ACCOUNT',
                    tabBarIcon: ({ focused }) => (
                        !focused ? <FAIcon name="user-o" color={Colors.QUARTZ} size={ICON_SIZE} style={{ opacity: focused ? 1 : 0.8 }} />
                            : <FAIcon name="user" color={Colors.QUARTZ} size={ICON_SIZE} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
// headerMode='none'
const HomeNavigator = () => {
    let currentUser = auth().currentUser;
    console.log(currentUser);
    const signInDispatch = useDispatch();
    const signOutDispatch = useDispatch();
    currentUser != null ? signInDispatch({ type: 'SIGN_IN' }) : signOutDispatch({ type: 'SIGN_OUT' });
    const isSignIn = useSelector(state => state.auth.isSignin);
    return isSignIn ?
        <Navigator headerMode='none'>
            <Screen name='HomeScreen' component={HomeNav} />
            <Screen name='Categories' component={Categories} />
            <Screen name='SelectedCategories' component={SelectedCategories} />
            <Screen name='ProductImg' component={ProductImg} />
            <Screen name='FinalPage' component={FinalPage} />
            <Screen name='AddsByCategories' component={AddsByCategories} />
            <Screen name='ShowAds' component={ShowAds} />
        </Navigator>
        : <Navigator headerMode='none'>
            <Screen name='Splash' component={Splash} />
            <Screen name='Dashboard' component={Dashboard} />
            <Screen name='Auth' component={AuthDashboard} />
            <Screen name='Otp' component={Otp} />
            <Screen name='HomeScreen' component={HomeNav} />
            <Screen name='Categories' component={Categories} />
            <Screen name='SelectedCategories' component={SelectedCategories} />
            <Screen name='ProductImg' component={ProductImg} />
            <Screen name='FinalPage' component={FinalPage} />
            <Screen name='AddsByCategories' component={AddsByCategories} />
            <Screen name='ShowAds' component={ShowAds} />
        </Navigator>
}

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);
const styles = StyleSheet.create({
    shadow: {
        shadowColor: Colors.GREY.SIMPLE,
        shadowOffset: {
            width: 0, height: 10
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.5,
        elevation: 10,
    }
})