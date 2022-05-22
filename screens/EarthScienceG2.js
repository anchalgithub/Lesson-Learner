import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Grade1 from '../screens/Grade1'
import {Header} from 'react-native-elements'

export default class EarthScienceG2 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 2 Earth Science', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>



<Text style = {styles.textBox}> Why So Blue, Lobster? </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}> Buster Blue, a rare blue lobster, was caught in 2009 by Captain Pete Begley. The lobster's blue coloration is a result of a genetic defect that causes the lobster to produce more of a certain protein than normal. Blue lobsters occur about one in every two million lobsters. </Text>


<Text style = {styles.textBox}> Hanging Glacier </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}>

<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}> Not all glaciers reach the ocean or a valley floor. Hanging glaciers, like this one in the Alps near Zermatt, Switzerland, stop partway down a mountain cliff. The icefalls and avalanches caused by hanging glaciers often put the area beneath them at risk.</Text>
 </Text>


<View> 
<Text style = {{fontSize:17, marginLeft:55, marginTop:20, fontFamily : 'times new roman'}}>  Stay tuned for new topics. </Text>
</View>

<View>
<TouchableOpacity style = {styles.button2} onPress = {()=>{this.props.navigation.navigate('Grade2')}}> 
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
marginBottom:80,
borderRadius:15,
textAlign:'center',
fontSize:30,
fontWeight: 'bold',
borderWidth:2
},

textBox:{
height:65,
alignSelf:'center',
marginTop:10,
textAlign:'center',
fontSize:20,
fontWeight: 'bold',
color:"black",
width:150,
margin:100,
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