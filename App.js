import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Base, View, Text, StyleSheet, Button ,TouchableOpacity, } from 'react-native';

import HomeScr from './src/home.js';

class IApp extends React.Component{
    render(){
        return (
            <HomeScr />
        );
    };
};

export default IApp;
