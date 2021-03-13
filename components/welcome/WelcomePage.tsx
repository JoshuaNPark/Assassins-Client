import React, {useCallback} from 'react';
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Divider, Input, Layout, TopNavigation } from "@ui-kitten/components";

interface Props {
  navigation: any;
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  button: {
    margin: 10,
  },
  input: {
    width: '80%',
  }
});

const WelcomePage = (props: Props) => {
  console.log('Welcome page props', props);
  const {navigation} = props;
  const navigateToJoinGameDetails = useCallback(() => {
    navigation.navigate('Join Game');
  }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="Welcome Page" alignment="center" />
      <Divider />
      <Layout style={{flex: 1}}>
        <View style={styles.view}>
          <Image
            style={styles.image}
            source={require('../../public/images/logo-with-text-white.png')}
          />
          <Input style={styles.input} placeholder='Username'/>
          <View style={{flexDirection: 'row'}}>
            <Button style={styles.button} onPress={navigateToJoinGameDetails}>Login</Button>
            <Button style={styles.button} onPress={navigateToJoinGameDetails}>Sign Up</Button>
          </View>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default WelcomePage;
