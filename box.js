import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class Box extends Component{
    state = {
        qtd: 0,
    };
    render(){
        return(
            <View style={styles.box}>
                <Text>Caixa {this.props.numero}</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    box: {
        width: 80,
        height: 80,
        backgroundColor: '#FF3',
        margin: 10,
    }
});