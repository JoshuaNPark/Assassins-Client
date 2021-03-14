import React from 'react';
import GenerateQR from '../qr-generator/GenerateQR';
import { Divider } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';

const TestPage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <GenerateQR toDisplay={'alanc'} />
    </SafeAreaView>
  );
};

export default TestPage;
