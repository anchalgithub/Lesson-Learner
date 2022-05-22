import React,{Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Grade1 from '../screens/Grade1'
import {Header} from 'react-native-elements'

export default class EarthScienceG1 extends Component{
render(){
return(
<View style = {{flex:1}}>

<Header backgroundColor = {'teal'} centerComponent = {{text: 'Grade 1 Earth Science', style :{color:'white', fontSize:15, fontFamily: 'Papyrus'}}}/>


<Image style ={{width :310,height:300,marginTop:1, marginLeft:2}} source ={require ('../assets/rain.jpg')}/>
<Text style = {styles.textBox}> Strange Rain </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:100, marginLeft:30}}> Animal rain is the natural phenomenon of small animals (such as this guppy) being swept up in waterspouts and then falling to Earth with raindrops. </Text>


<Image style ={{width :310,height:300,marginTop:-10, marginLeft:2}} source ={require ('../assets/SeaButter.jpg')}/>
<Text style = {styles.textBox}> The Sea Butterfly </Text>
<Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:100, marginLeft:30}}><Text style = {{height:65,
fontSize:20,
fontWeight: 'bold',
color:"black",
width:300,
fontFamily:'Papyrus', marginBottom:100, marginLeft:30}}> Animal rain is the natural phenomenon of small animals (such as this guppy) being swept up in waterspouts and then falling to Earth with raindrops. </Text>
 </Text>


<View> 
<Text style = {{fontSize:17, marginLeft:55, marginTop:20, fontFamily : 'times new roman'}}>  Stay tuned for new topics. </Text>
</View>

<View>
<TouchableOpacity style = {styles.button2} onPress = {()=>{this.props.navigation.navigate('Grade1')}}> 
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