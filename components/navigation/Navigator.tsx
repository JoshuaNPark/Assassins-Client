import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomePage from '../welcome/WelcomePage';
import JoinGame from '../join-game/JoinGame';
import React from 'react';
import TestPage from '../stub/TestPage';
import KillCamScreen from '../kill-cam/KillCamScreen';

const {Navigator: StackNavigator, Screen} = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator headerMode="none" initialRouteName={'Kill Cam'}>
        <Screen name="Test" component={TestPage} />
        <Screen
          name="Welcome Page"
          component={(props) => <WelcomePage {...props} />}
        />
        <Screen name="Join Game" component={JoinGame} />
        <Screen name="Kill Cam" component={KillCamScreen} />
      </StackNavigator>
    </NavigationContainer>
  );
};
export default Navigator;
