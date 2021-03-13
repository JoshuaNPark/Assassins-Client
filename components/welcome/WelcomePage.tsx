import React, {useCallback} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';

interface Props {
  navigate: any;
}

const WelcomePage = (props: Props) => {
  console.log('Welcome page props', props);
  const {navigate} = props;
  const navigateToJoinGameDetails = useCallback(() => {
    navigate.navigate('Join Game');
  }, [navigate]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="Welcome Page" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigateToJoinGameDetails}>Go To Join Game</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default WelcomePage;
