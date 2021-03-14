import React, { ReactElement } from "react";
import {Enemy} from '../../interfaces/EnemyInterface';
import {Card, Text} from '@ui-kitten/components';

interface Props {
  enemy: Enemy;
}

const Profile = (props: Props) => {
  const {name, bio, frequentLocations} = props.enemy;

  const Header = () => <Text style={{textAlign: 'center', margin: 2}} category={'h2'}>{name}</Text>;

  return (
    <Card style={{flex: 1, margin: 2}} header={Header}>
      <Text category={'h5'} style={{marginTop: 5, marginBottom: 2}}>Biography</Text>
      <Text>{bio}</Text>
      <Text category={'h5'} style={{marginTop: 10, marginBottom: 2}}>Frequent Locations</Text>
      <Text>{frequentLocations}</Text>
    </Card>
  );
};

export default Profile;
