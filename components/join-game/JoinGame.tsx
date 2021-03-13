import {SafeAreaView} from 'react-native';
import React from 'react';
import {Divider, Layout, Text} from '@ui-kitten/components';

const JoinGame = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">Join Game</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default JoinGame;
