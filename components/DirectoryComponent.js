import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        campsites: state.campsites
    }
        
};


class Directory extends Component{
   

    // use 'static' keyword to set a method on the class itself and not on the object that is substantiated by the class
    static navigationOptions = {
        title: 'Directory'
    };

    render(){
        // deconstruct navigate prop from the react-navigator's Navigation prop
        const { navigate } = this.props.navigation;

        const renderDirectoryItem = ({item}) => {
            return (
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured
                    onPress={() => navigate('CampsiteInfo', { campsiteId: item.id } )}
                    imageSrc={{ uri: baseUrl + item.image}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.campsites.campsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );


    }

    
}

export default connect(mapStateToProps)(Directory);