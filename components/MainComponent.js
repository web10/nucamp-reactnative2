import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import { View } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: ''
        };
    }

    onCampsiteSelect(campsiteID){
        this.setState({selectedCampsite: campsiteID});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory 
                    campsites={this.state.campsites} 
                    onPress={campsiteID => this.onCampsiteSelect(campsiteId)}
                />
                <CampsiteInfo
                    campsite={this.state.campsites.filter(
                        campsite => campsite.id === this.state.selectedCampsite[0])}
                />
           </View>
        )  
    }
}

export default Main