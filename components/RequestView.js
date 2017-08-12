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
                            <Text>{this.props.data[this.props.counter].client_fname}</Text>
                            <Text note>{this.props.data[this.props.counter].type}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image/>
                    </CardItem>
                    <CardItem content>
                        <Content>
                            <Text> Request Date : {this.props.data[this.props.counter].request_date} </Text>
                            <Text> Delivery Date/Time : {this.props.data[this.props.counter].delivery_date} </Text>
                            <Text> Request Date : {this.props.data[this.props.counter].request_date} </Text>


                        </Content>
                    </CardItem>
                    <CardItem>

                        <Body>

                        </Body>

                    </CardItem>
                </Card>
            </Content>
        );
    }
}