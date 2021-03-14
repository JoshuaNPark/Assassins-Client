import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Button,
  Divider,
  Icon,
  Layout,
  List,
  ListItem,
  Text,
} from '@ui-kitten/components';

const styles = StyleSheet.create({
  h1: {
    margin: 10,
  },
  h6: {
    margin: 5,
  },
  button: {
    margin: 10,
  },
  input: {
    width: '80%',
  },
  container: {
    maxHeight: '25%',
    width: '80%',
    margin: 15,
  },
  targetbutton: {
    margin: 10,
    backgroundColor: '#FF3D71',
    borderColor: '#FF3D71',
  },
});

const targets = new Array(10).fill({
  title: 'Target',
  description: 'Description for target',
});

const sampleTargets = [{
  title: 'Sam',
  description: 'Hi, I\'m Sam and I love to assassinate',
},
  {
    title: 'James',
    description: 'The name\'s James',
  },
  {
    title: 'Alan',
    description: 'Likes: Winning, Dislikes: You',
  }];

const players = new Array(10).fill({
  title: 'Player',
  description: 'Description for player',
});

const samplePlayers = [{
  title: 'Bron',
  description: 'Hide and seek pro!',
},
  {
    title: 'Josh',
    description: 'Catch me if you can!',
  },
  {
    title: 'Ewan',
    description: 'I thought this was pictionary??',
  },
  {
    title: 'Ewan 2.0',
    description: 'Beep Boop',
  }];

const ViewGame = () => {
  const renderTarget = ({item, index}) => (
    <ListItem
      title={`${item.title}`}
      description={`${item.description}`}
      accessoryLeft={renderTargetIcon}
      accessoryRight={renderTargetAccessory}
    />
  );

  const renderPlayer = ({item, index}) => (
    <ListItem
      title={`${item.title}`}
      description={`${item.description}`}
      accessoryLeft={renderPlayerIcon}
      accessoryRight={renderPlayerAccessory}
    />
  );

  const renderPlayerAccessory = () => <Button size="tiny">VIEW</Button>;

  const renderTargetAccessory = () => (
    <Button style={styles.targetbutton} size="tiny">
      VIEW
    </Button>
  );

  const renderTargetIcon = (props) => <Icon {...props} name="shake-outline" />;

  const renderPlayerIcon = (props) => <Icon {...props} name="person" />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1" style={styles.h1}>
          Game Info:
        </Text>
        <Text category="h6" style={styles.h6}>
          Targets:
        </Text>
        <List
          style={styles.container}
          data={sampleTargets}
          ItemSeparatorComponent={Divider}
          renderItem={renderTarget}
        />
        <Text category="h6" style={styles.h6}>
          Players:
        </Text>
        <List
          style={styles.container}
          data={samplePlayers}
          ItemSeparatorComponent={Divider}
          renderItem={renderPlayer}
        />
        <View style={{flexDirection: 'row'}}>
          <Button
            style={styles.targetbutton}
            onPress={console.log('Kill Pressed!')}>
            Kill
          </Button>
          <Button style={styles.button} onPress={console.log('Defend Pressed')}>
            Defend
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default ViewGame;
