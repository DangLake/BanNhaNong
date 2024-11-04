import { View, Text } from 'react-native';
import React from 'react';
import { ButtonComponent } from '../../components';
import { globalStyles } from '../../styles/globalStyles';

const LoginScreen = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View   style={[globalStyles.container]}>
      <Text>LoginScreen</Text>
      <ButtonComponent text="LOGIN" onPress={() => console.log('Login')}
      type='link'
      icon={
        <View>
          <Text>
            N
          </Text>
        </View>}/>
    </View>
  );
};

export default LoginScreen;
