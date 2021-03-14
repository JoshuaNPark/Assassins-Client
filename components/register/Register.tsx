import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Button,
  Divider,
  Input,
  Layout,
  Text
} from '@ui-kitten/components';

const styles = StyleSheet.create({
  h1: {
    margin: 10,
  },
  button: {
    margin: 10,
  },
  input: {
    width: '80%',
    margin: 2,
  },
  container: {
    maxHeight: '30%',
    width: '80%',
    margin: 15,
  },
});

const Register = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1" style={styles.h1}>
          Register:
        </Text>
        <Input style={styles.input} placeholder={'Username'}/>
        <Input style={styles.input} placeholder={'Bio'}/>
        <Input style={styles.input} placeholder={'Favourite Location'}/>
        <View style={{flexDirection: 'row'}}>
          <Button style={styles.button} onPress={console.log('Register Pressed')}>
            Register
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default Register;
