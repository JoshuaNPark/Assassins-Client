import { SafeAreaView, StyleSheet, View } from "react-native";
import React from 'react';
import { Button, Divider, Input, Layout, Text } from "@ui-kitten/components";

const styles = StyleSheet.create({
  h1: {
    margin:10,
  },
  button: {
    margin: 10,
  },
  input: {
    width: '80%',
  }
});

const JoinGame = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1" style={styles.h1}>Join Game</Text>
        <Input style={styles.input} placeholder='Game ID'/>
        <Button style={styles.button} onPress={console.log('Join Pressed!')}>Join</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default JoinGame;
