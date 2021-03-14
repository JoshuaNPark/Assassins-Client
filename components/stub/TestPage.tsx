import React from 'react';
import {Divider} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';
import Profile from '../player/Profile';

const TestPage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Profile
        enemy={{
          name: 'test name',
          bio:
            'some longer bio which probably takes up multiple lines ... hopefully',
          frequentLocations: 'by the computer, up a hill',
        }}
      />
    </SafeAreaView>
  );
};

export default TestPage;
