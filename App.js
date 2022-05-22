import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen'
import Grade1 from './screens/Grade1';
import Grade2 from './screens/Grade2';
import Grade3 from './screens/Grade3';
import Grade4 from './screens/Grade4';
import Grade5 from './screens/Grade5';

import EarthScienceG1 from './screens/EarthScienceG1'
import GeoG1 from './screens/GeoG1'
import MathG1 from './screens/MathG1'
import StoryG1 from './screens/StoryG1'
import ArtG1 from './screens/ArtG1'

import EarthScienceG2 from './screens/EarthScienceG2'
import GeoG2 from './screens/GeoG2'
import MathG2 from './screens/MathG2'
import StoryG2 from './screens/StoryG2'
import ArtG2 from './screens/ArtG2'

import EarthScienceG3 from './screens/EarthScienceG3'
import GeoG3 from './screens/GeoG3'
import MathG3 from './screens/MathG3'
import StoryG3 from './screens/StoryG3'
import ArtG3 from './screens/ArtG3'

import EarthScienceG4 from './screens/EarthScienceG4'
import GeoG4 from './screens/GeoG4'
import MathG4 from './screens/MathG4'
import StoryG4 from './screens/StoryG4'
import ArtG4 from './screens/ArtG4'

import EarthScienceG5 from './screens/EarthScienceG5'
import GeoG5 from './screens/GeoG5'
import MathG5 from './screens/MathG5'
import StoryG5 from './screens/StoryG5'
import ArtG5 from './screens/ArtG5'

import REG from './screens/REG'

import {createSwitchNavigator, createAppContainer} from 'react-navigation';

export default class App extends React.Component{
render(){
return (
<View>
<AppContainer/>
</View>
);
}
}

var AppNavigator = createSwitchNavigator ({
HomeScreen:HomeScreen,
Grade1:Grade1,
Grade2:Grade2,
Grade3:Grade3,
Grade4:Grade4,
Grade5:Grade5,

EarthScienceG1:EarthScienceG1,
GeoG1 : GeoG1,
MathG1 : MathG1,
StoryG1:StoryG1,
ArtG1:ArtG1,

EarthScienceG2:EarthScienceG2,
GeoG2 : GeoG2,
MathG2 : MathG2,
StoryG2:StoryG2,
ArtG2:ArtG2,

EarthScienceG3:EarthScienceG3,
GeoG3 : GeoG3,
MathG3 : MathG3,
StoryG3:StoryG3,
ArtG3:ArtG3,

EarthScienceG4:EarthScienceG4,
GeoG4 : GeoG4,
MathG4 : MathG4,
StoryG4:StoryG4,
ArtG4:ArtG4,

EarthScienceG5:EarthScienceG5,
GeoG5 : GeoG5,
MathG5 : MathG5,
StoryG5:StoryG5,
ArtG5:ArtG5,

REG:REG
})

const AppContainer = createAppContainer(AppNavigator)
