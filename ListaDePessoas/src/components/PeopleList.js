import React from 'react';
import {  StyleSheet, ScrollView } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {
    const { peoples, onPressItem } = props;  // Este é o mesmo que const peoples = props.peoples  em ES6

    // Atenção: Função map é semelhante ao foreach, sendo que foreach não retorna nada, 
    //          mas o map retornar um array do mesmo tamanho
    const items = peoples.map(people =>
        <PeopleListItem
            key={people.name.first}
            people={people}
            navigateToPeopleDetail={onPressItem} />
    );

    return (
        <ScrollView style={style.container}>
            {items}
        </ScrollView>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;