
import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import MainNavigator from './src/navigators/MainNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const App = () => {

  const [isShowSplash, setIsShowSplash] = useState(true);
  const [accessToken,setAccessToken] = useState('');

  const {getItem,setItem} = useAsyncStorage('accessToken');
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setIsShowSplash(false);
    },2500);
    return()=> clearTimeout(timeout);
  },[]);

  useEffect(()=>{
    checkLogin();
  },[]);
  const checkLogin = async() => {
    const token = await getItem();
    console.log('Access Token:', token);
    token && setAccessToken(token);
  };

  return <>
  <GestureHandlerRootView style={{ flex: 1 }}>
  <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
  {isShowSplash ? (<SplashScreen/>) : (<NavigationContainer>
    {
      accessToken ? <MainNavigator/> : <AuthNavigator/>}
  </NavigationContainer>)}
  </GestureHandlerRootView>
  </>
  ;
};

export default App;
