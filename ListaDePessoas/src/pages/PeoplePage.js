import React from 'react';
import { View } from 'react-native';
import { activateKeepAwake } from 'expo-keep-awake';

import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props); // Isto chamará o construtor padrão dele

    this.state = {
      peoples: []
    }

    activateKeepAwake();
  }

  componentDidMount() {
    axios // Chama por web Service no método get
      .get('https://randomuser.me/api/?nat=br&results=20')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        })
      })
  }

  render() {
    
    return (
      <View >  
        <PeopleList 
        peoples={this.state.peoples} 
        onPressItem={(pageParams) => this.props.navigation.navigate('PeopleDetail', pageParams)} />
      </View>
    );
  }
}
