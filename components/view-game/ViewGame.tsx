import { SafeAreaView, StyleSheet, View } from 'react-native';
import React  from 'react';
import { Button, Divider, Icon, Layout, List, ListItem, StyleService, Text, useTheme } from "@ui-kitten/components";

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
});

const data = new Array(10).fill({
  title: 'Target',
  description: 'Description for target',
});

const ViewGame = () => {

  const theme = useTheme();

  const renderTarget = ({item, index}) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderTargetIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  const renderPlayer = ({item, index}) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderPlayerIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  const renderItemAccessory = (props) => (
    <Button size='tiny'>VIEW</Button>
  );

  const renderTargetIcon = (props) => (
    <Icon {...props} name='shake-outline'/>
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
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={renderTarget}
        />
        <List
          style={styles.container}
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={renderPlayer}
        />
      </Layout>
    </SafeAreaView>
  );
};

export default ViewGame;
