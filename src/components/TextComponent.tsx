import { View, Text, StyleProp, TextStyle } from 'react-native';
import React from 'react';
import { appColors } from '../constants/appColors';


interface Props{
    text : string;
    color?: string;
    size?: number;
    flex?: number;
    font?:string;
    styles?: StyleProp<TextStyle>;
}
const TextComponent = (props:Props) => {
    const {text,size,flex,color,font,styles} = props;
  return (
    <Text style={[
        {
            color: color ?? appColors.text,
            flex:flex ?? 0,
            fontSize: size ?? 14,
            fontFamily: 'AirbnbCereal_W_Bd',
        },
    ]}>{text}</Text>
  );
};

export default TextComponent;
