import React from 'react';
import { View } from 'react-native';
import { activateKeepAwake } from 'expo-keep-awake';

import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  /* 1 - No inicio é executado o contructor(), 
     2 - depois o método render() é executado e
     3 - então o componentDidMount(),
     4 - depois com o this.setState o método render() é chamado novamente  
  */

  constructor(props) {
    super(props); // Isto chamará o construtor padrão dele

    // Aqui na construção incia o array peoples vazio
    this.state = {
      peoples: []
    }

    activateKeepAwake();
  }

  componentDidMount() {
    axios // Chama por web Service no método get
      .get('https://randomuser.me/api/?nat=br&results=10')
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
        <PeopleList peoples={this.state.peoples} />        
      </View>
    );
  }
}
