import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StatusBar, Dimensions, Alert, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SlideMenu from "./src/components/SlideMenu/index";
import SafeAreaViewDecider from 'react-native-smart-statusbar'
import messaging from '@react-native-firebase/messaging';
import SplashScreen from 'react-native-splash-screen'
import DeviceInfo from 'react-native-device-info';
import { PLAY_STORE } from './src/config/ApiConfig';


import HomeScreen from './src/screens/HomeScreen'
import Notifications from './src/screens/Notifications'
import Settings from './src/screens/Settings'
import Wishlist from './src/screens/Wishlist'
import MyCart from './src/screens/MyCart'
import Myaccount from './src/screens/Myaccount'
import ProductList from './src/screens/ProductList'
import Introduction from './src/screens/Introduction'
import ContactInfo from './src/screens/ContactInfo'
import Testimonials from './src/screens/Testimonials'
import TermsCondition from './src/screens/TermsCondition'
import PrivecyPolicy from './src/screens/PrivecyPolicy'
import Faq from './src/screens/Faq'
import ProductDetails from './src/screens/ProductDetails'

import Account from './src/screens/Account'
import MyOrder from './src/screens/MyOrder'
import MyAddress from './src/screens/MyAddress'
import MyPurchased from './src/screens/MyPurchased'
import Blog from './src/screens/Blog'
import BlogDetails from './src/screens/BlogDetails'
import Login from './src/screens/Login'
import ForgetPassword from './src/screens/ForgetPassword'
import Signup from "./src/screens/Signup";
import Search from "./src/screens/Search";
import Checkout from "./src/screens/Checkout";
import Thankyou from "./src/screens/Thankyou";
import Rewards from "./src/screens/Rewards";
import OtpScreen from "./src/screens/OtpScreen";
import OtpScreenForgetPass from "./src/screens/OtpScreenForgetPass";
import ResetPassword from "./src/screens/ResetPassword";
import Category from './src/screens/Category';
import Brands from './src/screens/Brands';

import FlashMessage from "react-native-flash-message";
import configureStore from './src/redux/store'
import { Provider } from "react-redux";

const store = configureStore();

import { useSelector, useDispatch } from "react-redux";

const _getPlayStore = (appVersion) => {
  
  fetch(PLAY_STORE, {
    method: "get",
  })
    .then((response) => {
      const statusCode = response.status;
      const data = response.json();
      return Promise.all([statusCode, data]);
    })
    .then(([status, response]) => {
      if (status == 200) {
        return response.app_version;
        // setAppVersion(response.app_version)
      } else {
        console.log(status, response);
      }
    })
    .catch((error) => console.log("error", error))
    .finally(() => {
      
    });
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: '80%',
        },
      }}
      drawerContent={(props) =>
        <SlideMenu {...props} />
      }>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
      <Drawer.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Drawer.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }} />
      <Drawer.Screen name="MyCart" component={MyCart} options={{ headerShown: false }} />
      <Drawer.Screen name="Myaccount" component={Myaccount} options={{ headerShown: false }} />
      <Drawer.Screen name="ProductList" component={ProductList} options={{ headerShown: false }} />
      <Drawer.Screen name="Introduction" component={Introduction} options={{ headerShown: false }} />
      <Drawer.Screen name="ContactInfo" component={ContactInfo} options={{ headerShown: false }} />
      <Drawer.Screen name="Testimonials" component={Testimonials} options={{ headerShown: false }} />
      <Drawer.Screen name="TermsCondition" component={TermsCondition} options={{ headerShown: false }} />
      <Drawer.Screen name="PrivecyPolicy" component={PrivecyPolicy} options={{ headerShown: false }} />
      <Drawer.Screen name="Faq" component={Faq} options={{ headerShown: false }} />
      {/* <Drawer.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} /> */}
      <Drawer.Screen name="Account" component={Account} options={{ headerShown: false }} />
      <Drawer.Screen name="MyOrder" component={MyOrder} options={{ headerShown: false }} />
      <Drawer.Screen name="MyAddress" component={MyAddress} options={{ headerShown: false }} />
      <Drawer.Screen name="MyPurchased" component={MyPurchased} options={{ headerShown: false }} />
      <Drawer.Screen name="Blog" component={Blog} options={{ headerShown: false }} />
      {/* <Drawer.Screen name="BlogDetails" component={BlogDetails} options={{ headerShown: false }} /> */}
      <Drawer.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
      <Drawer.Screen name="Rewards" component={Rewards} options={{ headerShown: false }} />
      <Drawer.Screen name="Category" component={Category} options={{ headerShown: false }} />
      <Drawer.Screen name="Brands" component={Brands} options={{ headerShown: false }} />



    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function Stack1() {
  return (
    <Stack.Navigator  >
      <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }} />
      <Stack.Screen name="MyCart" component={MyCart} options={{ headerShown: false }} />
      <Stack.Screen name="Myaccount" component={Myaccount} options={{ headerShown: false }} />
      <Stack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }} />
      <Stack.Screen name="Introduction" component={Introduction} options={{ headerShown: false }} />
      <Stack.Screen name="ContactInfo" component={ContactInfo} options={{ headerShown: false }} />
      <Stack.Screen name="Testimonials" component={Testimonials} options={{ headerShown: false }} />
      <Stack.Screen name="TermsCondition" component={TermsCondition} options={{ headerShown: false }} />
      <Stack.Screen name="PrivecyPolicy" component={PrivecyPolicy} options={{ headerShown: false }} />
      <Stack.Screen name="Faq" component={Faq} options={{ headerShown: false }} />
      
      <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
      <Stack.Screen name="MyOrder" component={MyOrder} options={{ headerShown: false }} />
      <Stack.Screen name="MyAddress" component={MyAddress} options={{ headerShown: false }} />
      <Stack.Screen name="MyPurchased" component={MyPurchased} options={{ headerShown: false }} />
      <Stack.Screen name="Blog" component={Blog} options={{ headerShown: false }} /> */}
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
      <Stack.Screen name="BlogDetails" component={BlogDetails} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OtpScreenForgetPass" component={OtpScreenForgetPass} options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="Thankyou" component={Thankyou} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
      
      <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
      <Stack.Screen name="Brands" component={Brands} options={{ headerShown: false }} /> */}



    </Stack.Navigator>
  )

}


export default function App() {


  const androidPush = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
      AsyncStorage.setItem('fcmToken', fcmToken)
    }
    // Register background handler
   
  }

  const checkToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
      AsyncStorage.setItem('fcmToken', fcmToken)
    }

    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        // setLoading(false);
      });

    // }
  }

  useEffect(() => {
    
    
    console.log("App Vrsn Chk:",_getPlayStore(DeviceInfo.getVersion()));
    if (Platform.OS == "ios") {
      const authorizationStatus = messaging().requestPermission();
      if (authorizationStatus) {
        console.log('Permission status:', authorizationStatus);
        checkToken();
      }
    } else {
      androidPush();
    }

    SplashScreen.hide();

  }, []);

  return (
    <Provider store={store}>
      <SafeAreaViewDecider statusBarHiddenForNotch={true} backgroundColor="#620000" />
      <NavigationContainer>
        <Stack1 />
        <FlashMessage position="bottom" floating={true} duration={2000} />
      </NavigationContainer>
    </Provider>

  );


}