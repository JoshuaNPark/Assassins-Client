import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useCallback, useContext, useState} from 'react';
import {Button, Divider, Input, Layout, Text} from '@ui-kitten/components';
import registerUser from '../../api/register-user';
import {AxiosContext} from '../../App';

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
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [favLoc, setFavLoc] = useState('');

  const axios = useContext(AxiosContext);

  const registerUserCallback = useCallback(() => {
    registerUser({
      axios,
      userId: username,
      name,
      bio,
      favouriteLocation: favLoc,
      onSuccess: (response) => {
        //TODO: navigate to create game
      },
      onFailure: () => {},
    });
  }, [username, name, bio, favLoc]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1" style={styles.h1}>
          Register:
        </Text>
        <Input
          value={username}
          onChangeText={(text) => setUserName(text)}
          style={styles.input}
          placeholder={'Username'}
        />
        <Input
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholder={'Name'}
        />
        <Input
          value={bio}
          onChangeText={(text) => setBio(text)}
          style={styles.input}
          placeholder={'Bio'}
        />
        <Input
          value={favLoc}
          onChangeText={(text) => setFavLoc(text)}
          style={styles.input}
          placeholder={'Favourite Location'}
        />
        <View style={{flexDirection: 'row'}}>
          <Button
            style={styles.button}
            onPress={() => {
              registerUserCallback();
            }}>
            Register
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default Register;
