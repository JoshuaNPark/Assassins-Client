/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {createContext, useContext, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {default as theme} from './custom-theme.json';

import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,

} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import Navigator from './components/navigation/Navigator';
import axios, {AxiosInstance} from 'axios';
import {API_ENDPOINT} from './api/api-config';
import User from './interfaces/UserInterface';
import Game from './interfaces/GameInterface';

declare const global: {HermesInternal: null | {}};

interface CurrentUserContext {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}

export const CurrentUserContext = createContext<CurrentUserContext>(
  (null as unknown) as CurrentUserContext,
);

interface CurrentGameContex {
  currentGame: Game | null;
  setCurrentGame: (game: Game) => void;
}

export const CurrentGameContext = createContext<CurrentGameContex>(
  (null as unknown) as CurrentGameContex,
);

export const AxiosContext = createContext<AxiosInstance>(
  (null as unknown) as AxiosInstance,
);

const App = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [currentGame, setCurrentGame] = useState<Game | null>(null);

  const [axiosImplementation] = useState<AxiosInstance>(
    axios.create({
      baseURL: API_ENDPOINT,
    }),
  );

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <AxiosContext.Provider value={axiosImplementation}>
          <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
            <CurrentGameContext.Provider value={{currentGame, setCurrentGame}}>
              <Navigator />
            </CurrentGameContext.Provider>
          </CurrentUserContext.Provider>
        </AxiosContext.Provider>
      </ApplicationProvider>
    </>
  );
};

export default App;
