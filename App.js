import React, { Component } from 'react';
import { Text, AppRegistry} from 'react-native';
import Header from './src/components/header';

export default class App extends Component {
    render() {
        return (
        <Text>Hello world!</Text>
        );
    }
}

AppRegistry.registerComponent('HelloRN', () => App);