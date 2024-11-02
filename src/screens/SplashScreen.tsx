
import { appInfors } from './../constants/appInfors';
import { ImageBackground ,Image, ActivityIndicator} from 'react-native';
import React from 'react';
import { SpaceComponent } from '../components';
import { appColors } from '../constants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground source={require('../images/SplashScreen.png')} style={
      {flex:1, justifyContent : 'center',alignItems : 'center'}}
        imageStyle={{flex: 1}}>
        <Image source={require('../images/logo.png')} style=
        {{width: appInfors.size.WIDTH * 0.9,
          resizeMode: 'contain',
        }}/>

        <SpaceComponent height={16}/>
        <ActivityIndicator color={appColors.gray} size={22}/>
      </ImageBackground>
  );
};

export default SplashScreen;
