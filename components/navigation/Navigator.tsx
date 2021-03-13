import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomePage from '../welcome/WelcomePage';
import JoinGame from '../join-game/JoinGame';
import React from 'react';

const {Navigator: StackNavigator, Screen} = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator headerMode="none" initialRouteName={'Welcome Page'}>
        <Screen
          name="Welcome Page"
          component={(props) => <WelcomePage {...props} />}
        />
        <Screen name="Join Game" component={JoinGame} />
      </StackNavigator>
    </NavigationContainer>
  );
};
export default Navigator;
