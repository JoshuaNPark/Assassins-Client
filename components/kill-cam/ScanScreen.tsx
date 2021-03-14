'use strict';
import React, {useCallback, useContext, useState} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Linking,
  SafeAreaView,
  View, Image, Dimensions
} from "react-native";

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Icon, Layout, Spinner, Text} from '@ui-kitten/components';
import killUser from '../../api/kill-user';
import {AxiosContext, CurrentGameContext, CurrentUserContext} from '../../App';

const ScanScreen = (e: any) => {
  const axios = useContext(AxiosContext);
  const {currentUser} = useContext(CurrentUserContext);
  const {currentGame} = useContext(CurrentGameContext);

  const [success, setSuccess] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const onSuccess = useCallback(() => {
    const victimQrHash = e.data;
    if (currentGame?.gameId && currentUser?.userId) {
      killUser({
        axios,
        gameId: currentGame.gameId,
        killerId: currentUser.userId,
        victimQrHash,
        onSuccess: () => {
          setSuccess(true);
        },
        onFailure: () => {
          setShowErrorMsg(true);
          setTimeout(() => {
            setShowErrorMsg(false);
          }, 1000);
        },
      });
    }

    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  }, [axios, currentUser, currentGame, setSuccess]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <QRCodeScanner
          showMarker={true}
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          topContent={
            <Text style={{textAlign: 'center', position: 'absolute', top: 17, zIndex: 1}} category={'h5'} appearance={'default'} >
              To kill your target sneak up and scan the QR code before they
              notice!
            </Text>
          }
          customMarker={<Image resizeMode={'center'} style={{position: 'relative', top: -8, bottom: -8}} source={require('../../public/images/bond-lens-large.png')}/>}
          bottomViewStyle={{position: 'relative', top: -5}}
          bottomContent={
            <>
              {/*// <View style={{paddingTop: 40, display: 'flex', flex: 1, justifyContent: 'center'}}>*/}
              {showErrorMsg ? (
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 5,
                    borderColor: 'red',
                    borderWidth: 1,
                    position: 'relative',
                    bottom: 50,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    maxHeight: 45
                  }}>
                  <Text style={{ padding: 10}} status='danger'>

                    Failed to Scan
                  </Text>
                </View>
              ) : success ? (
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 5,
                    borderColor: 'green',
                    position: 'relative',
                    bottom: 50,
                    borderWidth: 1,
                  }}>
                  <Text style={{padding: 10}} status='success'>
                    Target Eliminated
                  </Text>
                </View>
              ) : (
                <>
                  <View  style={{position: 'relative', bottom: -65, zIndex: 1}}>
                    <Spinner status="info" />
                  </View>

                  <Text
                    style={{
                      ...styles.centerText,
                      color: 'black',
                      paddingTop: 10,
                      backgroundColor: 'white',
                      maxHeight: 70,
                      borderRadius: 5
                    }}>
                    Waiting for QR to Scan...
                  </Text>
                </>
              )}

              {/*// </View>*/}
            </>
          }
        />
      </Layout>
    </SafeAreaView>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

AppRegistry.registerComponent('default', () => ScanScreen);
