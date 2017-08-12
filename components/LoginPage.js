/**
 * Created by yam2x on 2/25/2017.
 */
import React, {Component} from 'react';
import {Container, Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import {Actions} from "react-native-router-flux";
import {ToastAndroid, Alert} from 'react-native';


export default class extends Component {
    constructor(){
    super()
    this.state = {
        username: '', password:''
    }
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Email Address </Label>
                            <Input
                                onChangeText={(username) => this.setState({username})}
                                                                       value={this.state.username}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(password) => this.setState({password})}
                                           value={this.state.password}

                            />
                        </Item>
                        <Button warning block onPress={()=>this.logInPost(this.state.username, this.state.password)}>
                            <Text>LOGIN</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }

    logInPost(username, password) {

                if (username == '' || password == '') {
                    ToastAndroid.show('Please input all fields!', ToastAndroid.SHORT);
                } else
                    fetch( 'http://192.168.43.90/TruckItRN/public/get/login/'+username+'/'+password, {
                        method: 'get',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    }).then((response) => {
                        return response.json() // << This is the problem
                    })
                        .then((responseData) => { // responseData = undefined
                            this.setState({myData: responseData})
                            if (responseData == null) {
                              ToastAndroid.show('`Wrong email or pass!', ToastAndroid.SHORT);
                            } else {
                                    Actions.NavigationDrawer({session:responseData})
                            }
                        }).catch(function (error) {
                        Alert.alert(
                            'Error!',
                            'Can\'t connect to to server!',
                            [
                                {
                                    text: 'OK!', onPress: () => console.log("OK")
                                },
                            ],
                            {cancelable: false}
                        )
                        throw error;
                    });
                this.setState({loading: false, disableLogin: false, text: false})
            }
}