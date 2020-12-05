import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
// import { PARTNERS } from '../shared/partners'; now using redux state
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
       partners: state.partners 
    }
};

class About extends Component {
    
    static navigationOptions = {
        title: 'About Us'
    }

    render(){
        const renderPartner = ({item}) => { 
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: {uri: baseUrl + item.image} }}
                />

            )
        }

        return(
            <ScrollView>
                <Mission />
                <Card
                    title="Community Partners"
                >
                    <FlatList
                        data={this.props.partners.partners}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        )
    }
}

class Mission extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Card>
                <Text>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
                </Text>

            </Card>
        )
    }
    
}

export default connect(mapStateToProps)(About);