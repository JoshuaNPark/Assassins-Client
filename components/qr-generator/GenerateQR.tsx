import React, {useEffect} from 'react';
import {Text} from '@ui-kitten/components';
import RNQRGenerator from 'rn-qr-generator';
import Share from 'react-native-share';

interface Props {
  toDisplay: string;
}

const GenerateQR = (props: Props) => {
  const {toDisplay} = props;

  useEffect(() => {
    RNQRGenerator.generate({
      value: toDisplay,
      correctionLevel: 'H',
    }).then(({ uri}) => {
      Share.open({
        url: uri,
      });
    });
  }, [toDisplay]);

  return <Text>Generating...</Text>;
};

export default GenerateQR;
