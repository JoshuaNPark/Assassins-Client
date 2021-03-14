import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomePage from '../welcome/WelcomePage';
import JoinGame from '../join-game/JoinGame';
import React from 'react';
import TestPage from '../stub/TestPage';
import KillCamScreen from '../kill-cam/KillCamScreen';
import ViewGame from '../view-game/ViewGame';

const {Navigator: StackNavigator, Screen} = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator headerMode="none" initialRouteName={'Welcome Page'}>
        <Screen name="Test" component={TestPage} />
        <Screen
          name="Welcome Page"
          component={(props) => <WelcomePage {...props} />}
        />
        <Screen name="Join Game" component={(props) => <JoinGame {...props} />} />
        <Screen name="View Game" component={ViewGame} />
      </StackNavigator>
    </NavigationContainer>
  );
};
export default Navigator;
