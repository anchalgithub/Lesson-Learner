import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from './HomeScreen'
import {Header} from 'react-native-elements'

export default class Grade5 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 5 Subjects', style :{color:'white', fontSize:20, fontFamily: 'Papyrus'}}}/>


<View >
<TouchableOpacity style = {styles.button} onPress = {()=>{this.props.navigation.navigate('EarthScienceG5')}}> 
<Text style = {styles.textBox}> Earth Science </Text>
</TouchableOpacity>
</View>

<View >
<TouchableOpacity style = {styles.button} onPress = {()=>{this.props.navigation.navigate('GeoG5')}}> 
<Text style = {styles.textBox}> Geography </Text>
</TouchableOpacity>
</View>

<View >
<TouchableOpacity style = {styles.button} onPress = {()=>{this.props.navigation.navigate('MathG5')}}> 
<Text style = {styles.textBox}> Mathematics </Text>
</TouchableOpacity>
</View>

<View >
<TouchableOpacity style = {styles.button} onPress = {()=>{this.props.navigation.navigate('StoryG5')}}> 
<Text style = {styles.textBox}> Story Telling </Text>
</TouchableOpacity>
</View>

<View >
<TouchableOpacity style = {styles.button} onPress = {()=>{this.props.navigation.navigate('ArtG5')}}> 
<Text style = {styles.textBox}> Arts and Music  </Text>
</TouchableOpacity>
</View>

<View> 
<Text style = {{fontSize:17, marginLeft:55, marginTop:20, fontFamily : 'times new roman'}}>  New subjects will be out soon! </Text>
</View>

<View>
<TouchableOpacity style = {styles.button2} onPress = {()=>{this.props.navigation.navigate('HomeScreen')}}> 
<Text style = {styles.textBox2}> Go Back </Text>
</TouchableOpacity>
</View>


</View>
)
}
}


const styles = StyleSheet.create({
button:{
width:200,
height:30,
alignSelf:'center',
padding:20,
backgroundColor:'#B5EFF1',
margin:30,
borderRadius:15,
textAlign:'center',
fontSize:30,
fontWeight: 'bold',
borderWidth:2
},

button2:{
width:100,
height:30,
alignSelf:'center',
padding:20,
backgroundColor:'teal',
margin:30,
borderRadius:15,
textAlign:'center',
fontSize:30,
fontWeight: 'bold',
borderWidth:2
},

textBox:{
height:65,
alignSelf:'center',
marginTop:-10,
textAlign:'center',
fontSize:15,
fontWeight: 'bold',
color:"black",
width:135,
fontFamily:'Papyrus'
},


textBox2:{
height:65,
alignSelf:'center',
marginTop:-10,
textAlign:'center',
fontSize:15,
fontWeight: 'bold',
color:"white",
width:135,
fontFamily:'Papyrus'
},
})