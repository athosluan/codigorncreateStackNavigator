import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';



class AdicionarNomes extends Component{
    state = {
        primeiroNome: "",
        showName: ""
    };
    render(){
    return( 
        <View>
        <Text>Ola, {this.props.nome} Digite seu nome:</Text>
        <TextInput onChangeText={ item => this.setState({ primeiroNome: item}) } placeholder="seu nome.." />
        <Button onPress={() => this.setState({ showName: this.state.primeiroNome }) } title="Mostrar nome Inserido" />
        <Text>Como vai? {this.state.showName}</Text>
    </View>
    )};
};

export default AdicionarNomes;