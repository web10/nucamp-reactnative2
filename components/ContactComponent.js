import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    constructor(props){
        super(props)
    }
    
    static navigationOptions = {
        title: 'Contact Us'
    }

    render(){
        return(
            <ScrollView>
                <Text>
                    Contact Component here
                </Text>
            </ScrollView>
        )
    }
}

export default Contact;