import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Grade1 from '../screens/Grade1'
import {Header} from 'react-native-elements'

export default class ArtG3 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 3 Arts and Music', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>



<Text style = {styles.textBox}> Make a Papier-Mâché Globe </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginTop:50, marginLeft:30}}> Use newspaper strips and a balloon. Use colored paints to show land and water and add borders and labels.</Text>

<View> 
<Text style = {{fontSize:17, fontFamily : 'times new roman', marginTop:100, marginLeft:70}}>  Stay tuned for new topics. </Text>
</View>

<View>
<TouchableOpacity style = {styles.button2} onPress = {()=>{this.props.navigation.navigate('Grade3')}}> 
<Text style = {styles.textBox2}> Go Back </Text>
</TouchableOpacity>
</View>


</View>
)
}
}


const styles = StyleSheet.create({

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
marginTop:-5,
textAlign:'center',
fontSize:25,
fontWeight: 'bold',
color:"black",
width:300,
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