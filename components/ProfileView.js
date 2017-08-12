import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem,Right, Left, Body, Text, Button, Icon } from 'native-base';

export default class extends Component {
    render() {
        return (
            <Content>
                <Card >
                    <CardItem>
                        <Left>
                            <Body>
                            <Text>{this.props.data[this.props.counter].client_fname} {this.props.data[this.props.counter].client_lname}</Text>
                            <Text>{this.props.data[this.props.counter].client_email} </Text>
                            <Text>{this.props.data[this.props.counter].client_contact} </Text>
                            <Text note>{this.props.data[this.props.counter].type}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image/>
                    </CardItem>
                    <CardItem content>
                        <Content>




                        </Content>
                    </CardItem>

                </Card>
            </Content>
        );
    }
}