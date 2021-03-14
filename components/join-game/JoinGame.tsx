import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useCallback } from "react";
import { Button, Divider, Input, Layout, Text } from "@ui-kitten/components";

interface Props {
  navigation: any;
}

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

const JoinGame = (props: Props) => {
  const {navigation} = props;
  const navigateToViewGame = useCallback(() => {
    navigation.navigate('View Game');
  }, [navigation]);
  const navigateToCreateGame = useCallback(() => {
    navigation.navigate('Create Game');
  }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1" style={styles.h1}>Join Game</Text>
        <Input style={styles.input} placeholder="Game ID" />
        <View style={{flexDirection: 'row'}}>
          <Button style={styles.button} onPress={navigateToViewGame}>Join</Button>
          <Button style={styles.button} onPress={navigateToCreateGame}>Create</Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default JoinGame;
