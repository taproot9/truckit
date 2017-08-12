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
                                <Text>{this.props.data[this.props.counter].trucker_fname}</Text>
                                <Text note>{this.props.data[this.props.counter].type}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image/>
                        </CardItem>
                        <CardItem content>
                            <Content>
                           <Text> Model : {this.props.data[this.props.counter].model} </Text>
                           <Text> Plate Number: {this.props.data[this.props.counter].plate_number} </Text>
                           <Text> Capacity: {this.props.data[this.props.counter].capacity} </Text>
                           <Text> Preferred Destination: {this.props.data[this.props.counter].pref_destination}</Text>
                           <Text> Preffered Cargo: {this.props.data[this.props.counter].pref_cargo} </Text>

                            </Content>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>Feedbacks</Text>
                                </Button>
                            </Left>
                            <Body>
                            <Button transparent>
                                <Icon name="star" /><Text>Ratings</Text>
                            </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
        );
    }
}