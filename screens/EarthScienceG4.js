import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Grade1 from '../screens/Grade1'
import {Header} from 'react-native-elements'

export default class EarthScienceG4 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 4 Earth Science', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>



<Text style = {styles.textBox}> Shoebill </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginLeft:30}}>The shoebill also known as whalehead, whale-headed stork, or shoe-billed stork, is a very large stork-like bird. It derives its name from its enormous shoe-shaped bill. It has a somewhat stork-like overall form and has previously been classified with the storks in the order Ciconiiformes based on this morphology. </Text>



<View> 
<Text style = {{fontSize:17, marginLeft:70, marginTop:300, fontFamily : 'times new roman'}}>  Stay tuned for new topics. </Text>
</View>

<View>
<TouchableOpacity style = {styles.button2} onPress = {()=>{this.props.navigation.navigate('Grade4')}}> 
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