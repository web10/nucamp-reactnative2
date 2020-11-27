import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import CampsiteInfo from './CampsiteInfoComponent';
// import { CAMPSITES } from '../shared/campsites';
import { View , Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const DirectoryNavigator = createStackNavigator(
    {
       Directory: { screen: Directory },
       CampsiteInfo: { screen: CampsiteInfo },
       About: { screen: About },
       Contact: { screen: Contact }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        
        Home: { screen: Home } 
     },
     {
         defaultNavigationOptions: {
             headerStyle: {
                 backgroundColor: '#5637DD'
             },
             headerTintColor: '#fff',
             headerTitleStyle: {
                 color: '#fff'
             }
         }
     }
);

const AboutNavigator = createStackNavigator(
    {
        
        About: { screen: About } 
     },
     {
         defaultNavigationOptions: {
             headerStyle: {
                 backgroundColor: '#5637DD'
             },
             headerTintColor: '#fff',
             headerTitleStyle: {
                 color: '#fff'
             }
         }
     }
);

const ContactNavigator = createStackNavigator(
    {
        
        Contact: { screen: Contact } 
     },
     {
         defaultNavigationOptions: {
             headerStyle: {
                 backgroundColor: '#5637DD'
             },
             headerTintColor: '#fff',
             headerTitleStyle: {
                 color: '#fff'
             }
         }
     }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator },
        Contact: { screen: ContactNavigator },
        About: { screeen: AboutNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
)

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    // moved the constructor because we moved state data to DirectoryComponent
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         campsites: CAMPSITES,
    //         selectedCampsite: ''
    //     };
    // }

    // moved this feature to use routing to display Campsite information
    // onCampsiteSelect(campsiteId){
    //     this.setState({selectedCampsite: campsiteId})
    //     console.log(`new selectedCampsite ID: ${this.state.selectedCampsite}`);
    // }

    render() {
        return (
            <View 
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}      
            >
                <AppNavigator />
                {/* AppNavigator replaced the Directory and CampsiteInfo  */}
           </View>
        )  
    }
}

export default Main