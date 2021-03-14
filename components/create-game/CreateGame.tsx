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

const CreateGame = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1" style={styles.h1}>
          Create Game:
        </Text>
        <Input style={styles.input} placeholder={'Name'}/>
        <Input style={styles.input} placeholder={'Location'}/>
        <Input style={styles.input} placeholder={'Max Players'}/>
        <Input style={styles.input} placeholder={'End Date'}/>
        <View style={{flexDirection: 'row'}}>
          <Button style={styles.button} onPress={console.log('Create Pressed')}>
            Create
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default CreateGame;
