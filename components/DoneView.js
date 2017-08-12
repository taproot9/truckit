/**
 * Created by yam2x on 2/25/2017.
 */
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
                            <Text> Confirm Date : {this.props.data[this.props.counter].confirm_date} </Text>


                        </Content>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
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