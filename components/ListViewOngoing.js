/**
 * Created by DelaCerna on 2/13/17.
 */
import React, {Component} from 'react';
import { Image } from 'react-native';
import {AppRegistry, View, ToastAndroid, Text, StyleSheet, Alert} from 'react-native';
import {Container, Content, Icon, Item, Label, Left } from 'native-base';
import {Button} from 'native-base';
import {Actions} from "react-native-router-flux";
//import ProfileView from './ProfileView';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deliver_transaction:''
        };
    }

    render() {
        var counter = -1;
        return (
            <Container>
                <Content>
                   <Image/>
                        <Left>

                          <Text>{this.props.session.client_fname} {this.props.session.client_lname}</Text>
                          <Text>{this.props.session.client_email}</Text>
                          <Text>{this.props.session.client_contact}</Text>
                        </Left>



                </Content>
            </Container>
        );
    }

};


