import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class About extends Component {
    constructor(props){
        super(props)
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render(){
        return(
            <ScrollView>
                <Text>
                    About Component here
                </Text>
            </ScrollView>
        )
    }
}

export default About;