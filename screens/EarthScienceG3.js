import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Grade1 from '../screens/Grade1'
import {Header} from 'react-native-elements'

export default class EarthScienceG3 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 3 Earth Science', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>



<Text style = {styles.textBox}> Blob Fish </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:200, marginLeft:30}}>Psychrolutes marcidus, the smooth-head blobfish, also known simply as blobfish, is a deep sea fish of the family Psychrolutidae. It inhabits the deep waters off the coasts of mainland Australia and Tasmania, as well as the waters of New Zealand. Blobfish are typically shorter than 30 cm.  </Text>



<View> 
<Text style = {{fontSize:17, marginLeft:55, marginTop:100,  fontFamily : 'times new roman'}}>  Stay tuned for new topics. </Text>
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