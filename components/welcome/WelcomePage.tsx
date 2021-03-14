import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Button,
  Divider,
  Input,
  Layout,
  Text,
  TopNavigation,
} from '@ui-kitten/components';
import {AxiosContext, CurrentGameContext, CurrentUserContext} from '../../App';
import registerUser from '../../api/register-user';
import login from '../../api/login';
import getGameInfo from '../../api/get-game-info';
import getUser from '../../api/get-user';
import { Enemy } from "../../interfaces/EnemyInterface";

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
  },
});

const WelcomePage = (props: Props) => {
  console.log('Welcome page props', props);
  const {navigation} = props;
  const navigateToJoinGameDetails = useCallback(() => {
    navigation.navigate('Join Game');
  }, [navigation]);
  const navigateToRegisterDetails = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);
  const navigateToViewGame = useCallback(() => {
    navigation.navigate('View Game');
  }, [navigation]);

  const axios = useContext(AxiosContext);
  const {setCurrentUser} = useContext(CurrentUserContext);
  const {setCurrentGame} = useContext(CurrentGameContext);

  const [failed, setFailed] = useState<boolean>(false);

  useEffect(() => {
    if (failed) {
      setTimeout(() => {
        setFailed(false);
      }, 1000);
    }
  }, [failed]);

  const getPlayers = async (playerIds: string[]) => {
    const promises = playerIds.map(async (pId) => {
      const player = (
        await getUser({
          axios,
          userId: pId,
        })
      ).data;
      return {
        id: player.id,
        name: player.name,
        bio: player.bio,
        frequentLocations: player.favourite_location,
      } as Enemy;
    });
    return await Promise.all(promises);
  };

  const setGameFromAPI = useCallback(
    (userId: string, gameId: string) => {
      getGameInfo({
        gameId,
        userId,
        axios,
        onSuccess: async (response) => {
          try {
            setCurrentGame({
              gameId: response.id,
              name: response.name,
              players: await getPlayers(response.player_ids),
              targets: await getPlayers(response.target_ids),
              dead: response.isDead === 'true',
              location: response.location,
              maxPlayers: response.max_players,
              endDate: new Date(Math.floor(response.end_date / 1000)),
            });
            navigateToViewGame();
          } catch (e) {
            setFailed(true);
          }
        },
        onFailure: () => setFailed(true),
      });
    },
    [axios, setCurrentGame, navigateToViewGame],
  );

  const onLogin = useCallback(
    (userId: string) => {
      login({
        axios,
        userId,
        onSuccess: (response) => {
          setCurrentUser({userId});
          if (response.game_id) {
            setGameFromAPI(userId, response.game_id);
          } else {
            navigateToJoinGameDetails();
          }
        },
        onFailure: () => {
          setFailed(true);
        },
      });
    },
    [axios, setCurrentUser, setGameFromAPI, navigateToJoinGameDetails],
  );

  // const createUser = useCallback((userId: string) => {
  //   registerUser({
  //
  //   });
  // }, [axios,]);

  const [userName, setUserName] = useState('');

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
          <Input
            value={userName}
            onChangeText={(un) => setUserName(un)}
            style={styles.input}
            placeholder="Username"
          />
          <View style={{flexDirection: 'row'}}>
            <Button style={styles.button} onPress={navigateToRegisterDetails}>Sign Up</Button>
            <Button
              style={styles.button}
              onPress={() => {
                onLogin(userName);
              }}>
              Login
            </Button>
          </View>
        </View>
        {failed ? (
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
              borderColor: 'red',
              borderWidth: 1,
              position: 'absolute',
              bottom: 50,
              flexDirection: 'row',
              flexWrap: 'wrap',
              maxHeight: 45,
              flex: 1,
              marginLeft: 125,
            }}>
            <Text style={{padding: 10}} status="danger">
              Failed to Login
            </Text>
          </View>
        ) : null}
      </Layout>
    </SafeAreaView>
  );
};

export default WelcomePage;
