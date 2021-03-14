import { SafeAreaView, StyleSheet, View } from 'react-native';
import React  from 'react';
import {
  Button,
  Divider,
  Icon,
  Layout,
  List,
  ListItem,
  StyleService,
  Text,
  useTheme,
  withStyles
} from "@ui-kitten/components";

const styles = StyleSheet.create({
  h1: {
    margin:10,
  },
  button: {
    margin: 10,
  },
  input: {
    width: '80%',
  },
  container: {
    maxHeight: '30%',
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

const players = new Array(10).fill({
  title: 'Player',
  description: 'Description for player',
});

const ViewGame = () => {

  const renderTarget = ({item, index}) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderTargetIcon}
      accessoryRight={renderTargetAccessory}
    />
  );

  const renderPlayer = ({item, index}) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderPlayerIcon}
      accessoryRight={renderPlayerAccessory}
    />
  );

  const renderPlayerAccessory = (props) => (
    <Button size='tiny'>VIEW</Button>
  );

  const renderTargetAccessory = (props) => (
    <Button
      style={styles.targetbutton}
      size='tiny'>VIEW</Button>
  );

  const renderTargetIcon = (props) => (
    <Icon {...props}  name='shake-outline'/>
  );

  const renderPlayerIcon = (props) => (
    <Icon {...props} name='person'/>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1" style={styles.h1}>Game Info:</Text>
        <List
          style={styles.container}
          data={targets}
          ItemSeparatorComponent={Divider}
          renderItem={renderTarget}
        />
        <List
          style={styles.container}
          data={players}
          ItemSeparatorComponent={Divider}
          renderItem={renderPlayer}
        />
        <View style={{flexDirection: 'row'}}>
          <Button style={styles.targetbutton} onPress={console.log('Kill Pressed!')}>Kill</Button>
          <Button style={styles.button} onPress={'Defend Pressed'}>Defend</Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default ViewGame;
