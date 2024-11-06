import {View} from 'react-native';
import React, {useState} from 'react';
import {ContainerComponent, InputComponent} from '../../components';
import {globalStyles} from '../../styles/globalStyles';
import {Call, Lock} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';

const LoginScreen = () => {
  const [sdt, setSDT] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ContainerComponent>
      <InputComponent
        value={sdt}
        placeholder="SDT"
        onChange={val => setSDT(val)}
        // isPassword
        allowClear
        affix={<Call size={22} color={appColors.gray} />}
      />
      <InputComponent
        value={password}
        placeholder="Password"
        onChange={val => setPassword(val)}
        isPassword
        allowClear
        affix={<Lock size={22} color={appColors.gray} />}
      />
    </ContainerComponent>
  );
};

export default LoginScreen;
