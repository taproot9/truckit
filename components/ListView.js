/**
 * Created by DelaCerna on 2/13/17.
 */
import React, {Component} from 'react';
import {AppRegistry, View, ToastAndroid, Text, StyleSheet, Alert} from 'react-native';
import {Container, Content, List, ListItem, Icon} from 'native-base';
import {Button} from 'native-base';
import {Actions} from "react-native-router-flux";
import CardView from './CardView';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles:''
        };
    }
    componentDidMount(){
        fetch('http://192.168.1.4/TruckItRN/public/get/vehicles', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.json() // << This is the problem
        })
            .then((responseData) => { // responseData = undefined
                this.setState({vehicles: responseData})
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
                    <List dataArray={this.state.vehicles} renderRow={(data) =>
                    <ListItem>
                        <CardView
                        data = {this.state.vehicles}
                        counter = {counter=counter+1}/>
                    </ListItem>
                    }/>
                </Content>
            </Container>
        );
    }

};


