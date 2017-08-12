/**
 * Created by DelaCerna on 2/13/17.
 */
import React, {Component} from 'react';
import {AppRegistry, View, ToastAndroid, Text, StyleSheet, Alert} from 'react-native';
import {Container, Content, List, ListItem, Icon} from 'native-base';
import {Button} from 'native-base';
import {Actions} from "react-native-router-flux";
import DoneView from './DoneView';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delivery_transaction:''
        };
    }
    componentDidMount(){
        fetch('http://192.168.43.90/TruckItRN/public/get/delivery_transaction', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.json() // << This is the problem
        })
            .then((responseData) => { // responseData = undefined
                this.setState({delivery_transaction: responseData})
            })
            .catch(function(error) {
                Alert.alert(
                    'Error!',
                    'Can\'t connect to server!',
                    [

                        {text: 'CANCEL', onPress: () => console.log('CANCEL')},
                        {
                            text: 'OK!', onPress: () => console.log('OK')
                        },
                    ],
                    {cancelable: false}
                )
                throw error;
            });
    }
    render() {
        var counter = -1;
        return (
            <Container>
                <Content>
                    <List dataArray={this.state.delivery_transaction} renderRow={(data) =>
                    <ListItem>
                        <DoneView
                        data = {this.state.delivery_transaction}
                        counter = {counter=counter+1}/>
                    </ListItem>
                    }/>
                </Content>
            </Container>
        );
    }

};


